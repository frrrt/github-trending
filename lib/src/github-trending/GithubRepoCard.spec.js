import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GithubRepoCard from './GithubRepoCard';

const baseProps = {
    repo: {
        id: 293955792,
        name: 'test123',
        html_url: 'https://github.com/umpfel/mumpf',
        description: 'Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25.',
        watchers: 666,
        language: 'JavaScript',
    },
    isStarred: false,
    onToggleStar: jest.fn(),
};

describe('GithubRepoCard', () => {
    it('is rendered correctly', () => {
        expect(render(<GithubRepoCard {...baseProps} />).container).toMatchSnapshot();
    });

    it('is rendered correctly when starred', () => {
        expect(render(<GithubRepoCard {...baseProps} isStarred />).container).toMatchSnapshot();
    });

    it('calls onToggleStar when button is clicked', () => {
        render(<GithubRepoCard {...baseProps} />);
        fireEvent.click(screen.getByRole('button'));
        expect(baseProps.onToggleStar.mock.calls.length).toEqual(1);
    });
});
