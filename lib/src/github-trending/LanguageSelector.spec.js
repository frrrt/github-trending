import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LanguageSelector from './LanguageSelector';

const baseProps = {
    currentLanguages: ['JavaScript', 'Java', 'PHP', 'TypeScript', 'NonExistingLanguage'],
    onChange: jest.fn(),
};

describe('LanguageSelector', () => {
    it('is rendered correctly', () => {
        expect(render(<LanguageSelector {...baseProps} />).container).toMatchSnapshot();
    });

    it('select language', () => {
        render(<LanguageSelector {...baseProps} />);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Java' } });
        fireEvent.keyDown(screen.getByRole('textbox'), { keyCode: 13 });

        fireEvent.click(screen.getAllByRole('option')[1]);
        expect(baseProps.onChange.mock.calls.length).toEqual(1);
        expect(baseProps.onChange.mock.calls[0][0]).toEqual('JavaScript');
    });
});
