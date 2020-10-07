import React from 'react';
import PropTypes from 'prop-types';

import {
    Box,
    Button,
    makeStyles,
} from '@material-ui/core';

import FilterIcon from '@material-ui/icons/FilterList';

import LanguageSelector from './LanguageSelector';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    starredButton: {
        marginLeft: '2rem',
        whiteSpace: 'no-wrap',
    },
    starredIcon: {
        marginRight: theme.spacing(1),
    },
}));

const FilterBar = ({
    isStarredFiltered,
    availableLanguages,
    onChangeLanguage,
    onChangeStarred,
}) => {
    const classes = useStyles();

    return (
        <Box mt={4} className={classes.root}>
            <LanguageSelector
                currentLanguages={availableLanguages}
                onChange={onChangeLanguage}
            />

            <Button
                variant="outlined"
                className={classes.starredButton}
                onClick={onChangeStarred}
                color={isStarredFiltered ? 'secondary' : undefined}
            >
                <FilterIcon className={classes.starredIcon} /> Starred
            </Button>
        </Box>
    );
};

FilterBar.propTypes = {
    isStarredFiltered: PropTypes.bool.isRequired,
    availableLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChangeLanguage: PropTypes.func.isRequired,
    onChangeStarred: PropTypes.func.isRequired,
};

export default FilterBar;
