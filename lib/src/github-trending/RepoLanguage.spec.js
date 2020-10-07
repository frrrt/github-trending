import React from 'react';
import { render } from '@testing-library/react';
import RepoLanguage from './RepoLanguage';

const baseProps = {
    language: 'JavaScript',
};

describe('RepoLanguage', () => {
    it('is rendered correctly', () => {
        expect(render(<RepoLanguage {...baseProps} />).container).toMatchSnapshot();
    });

    it('no language given', () => {
        expect(render(<RepoLanguage />).container).toMatchSnapshot();
    });

    it('unknown language given', () => {
        expect(render(<RepoLanguage language="this-language-does-not-exist" />).container).toMatchSnapshot();
    });
});
