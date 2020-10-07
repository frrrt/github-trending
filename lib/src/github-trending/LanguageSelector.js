import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, makeStyles } from '@material-ui/core';

const filterAvailableLanguages = currentLanguages => currentLanguages
    .sort()
    // Filter duplicate entries, from stackoverflow
    .filter((item, pos, ary) => !pos || item !== ary[pos - 1]);

const useStyles = makeStyles(() => ({
    root: {
        // width: 200 ensures that layout works on iPhone5 sized screens
        width: 200,
    },
}));

const LanguageSelector = ({ onChange, currentLanguages }) => {
    const classes = useStyles();

    return (
        <Autocomplete
            id="language-selector"
            options={filterAvailableLanguages(currentLanguages)}
            getOptionLabel={option => option}
            className={classes.root}
            size="small"
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={params => <TextField {...params} label="Language" variant="outlined" />}
            onChange={(_, newValue) => onChange(newValue)}
        />
    );
};

LanguageSelector.propTypes = {
    onChange: PropTypes.func.isRequired,
    currentLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LanguageSelector;
