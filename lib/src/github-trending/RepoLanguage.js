import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import LanguageColors from '../../languageColors';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    circle: {
        borderRadius: theme.spacing(1),
        width: theme.spacing(2),
        height: theme.spacing(2),
        marginRight: theme.spacing(1),
    },
}));

const RepoLanguage = ({ language }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.circle} style={{ backgroundColor: LanguageColors[language] ?? (language && '#ccc') }} />
            {language}
        </div>
    );
};

RepoLanguage.propTypes = {
    language: PropTypes.string,
};

RepoLanguage.defaultProps = {
    language: '',
};

export default RepoLanguage;
