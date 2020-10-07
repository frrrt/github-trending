import React from 'react';

import {
    render,
    fireEvent,
    screen,
} from '@testing-library/react';
import { GithubTrendingPage } from '../pages/github-trending';

const baseProps = {
    repos: [
        {
            id: 300592907,
            name: 'GHunt',
            html_url: 'https://github.com/mxrch/GHunt',
            description: '🕵️‍♂️ Investigate Google Accounts with emails. ',
            watchers: 2950,
            language: 'Python',
        },
        {
            id: 300996055,
            name: 'vit-pytorch',
            html_url: 'https://github.com/lucidrains/vit-pytorch',
            description: 'Implementation of Vision Transformer, a simple way to achieve SOTA in vision classification with only a single transformer encoder, in Pytorch',
            watchers: 299,
            language: 'Python',
        },
        {
            id: 300450780,
            name: 'swift-atomics',
            html_url: 'https://github.com/apple/swift-atomics',
            description: null,
            watchers: 244,
            language: 'Swift',
        },
        {
            id: 301131109,
            name: 'mtproto',
            html_url: 'https://github.com/xelaj/mtproto',
            description: 'Full-native go implementation of Telegram API',
            watchers: 244,
            language: 'Go',
        },
    ],
    starred: {
        300450780: true,
        300996055: true,
    },
    onToggleStar: jest.fn(),
};

describe('GithubTrendingPage', () => {
    it('is rendered correctly', () => {
        expect(render(<GithubTrendingPage {...baseProps} />).container).toMatchSnapshot();
    });

    it('renders empty state correctly', () => {
        expect(render(<GithubTrendingPage {...baseProps} repos={[]} starred={{}} />).container).toMatchSnapshot();
    });

    it('calls onToggleStar correctly', () => {
        render(<GithubTrendingPage {...baseProps} />);

        const button = screen.getByText('2950');
        fireEvent.click(button);
        expect(baseProps.onToggleStar.mock.calls.length).toEqual(1);
        expect(baseProps.onToggleStar.mock.calls[0][0]).toEqual(300592907);

        fireEvent.click(button);
        expect(baseProps.onToggleStar.mock.calls.length).toEqual(2);
        expect(baseProps.onToggleStar.mock.calls[1][0]).toEqual(300592907);
    });

    it('toggles starred correctly', () => {
        render(<GithubTrendingPage {...baseProps} />);

        const button = screen.getByText('Starred');
        fireEvent.click(button);

        expect(screen.queryByText('2950')).toBeNull();
    });

    it('filter language', () => {
        render(<GithubTrendingPage {...baseProps} />);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Python' } });
        fireEvent.keyDown(screen.getByRole('textbox'), { keyCode: 13 });

        fireEvent.click(screen.getByRole('option'));

        expect(screen.queryByText('2950')).not.toBeNull();
        expect(screen.queryByText('244')).toBeNull();
    });
});
