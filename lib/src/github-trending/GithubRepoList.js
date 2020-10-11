import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    Box,
    Grid,
    makeStyles,
} from '@material-ui/core';

import githubRepoPropType from '../../proptypes/githubRepoPropType';
import GithubRepoCard from './GithubRepoCard';

const useStyles = makeStyles(() => ({
    row: {
        // flex box ensures, that the cards in a row have the same height
        // disregarding the natural height from their innenr content.
        display: 'flex',
    },
}));

const GithubRepoList = ({ filteredRepos, starred, onToggleStar }) => {
    const classes = useStyles();

    return (
        <Box mt={4} mb={8}>
            <Grid container spacing={2}>
                {filteredRepos.map(repo => (
                    <Grid key={repo.id} item xs={12} sm={6} md={4} lg={4} className={classes.row}>
                        <GithubRepoCard
                            repo={repo}
                            onToggleStar={() => onToggleStar(repo.id)}
                            isStarred={Boolean(starred[repo.id])}
                        />
                    </Grid>
                ))}
            </Grid>
            {filteredRepos.length === 0 && (
                <Typography variant="body1">
                    No repos found!
                </Typography>
            )}
        </Box>
    );
};

GithubRepoList.propTypes = {
    filteredRepos: PropTypes.arrayOf(githubRepoPropType).isRequired,
    onToggleStar: PropTypes.func.isRequired,
    starred: PropTypes.shape({}).isRequired,
};

export default GithubRepoList;
