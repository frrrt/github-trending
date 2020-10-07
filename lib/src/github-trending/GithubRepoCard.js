import React from 'react';
import PropTypes from 'prop-types';

import {
    Typography,
    Link,
    Card,
    CardContent,
    makeStyles,
} from '@material-ui/core';

import RepoLanguage from './RepoLanguage';
import StarButton from './StarButton';
import githubRepoPropType from '../../proptypes/githubRepoPropType';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    repoTitle: {
        // prevent very long repo names from braking layout
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        // TODO: height 31 mitigates content jumping which comes from a bug in mui
        height: 31,
    },
}));

const GithubRepoCard = ({ repo, isStarred, onToggleStar }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" className={classes.repoTitle}>
                    {/* title attribute is important for very long repo names which get cut */}
                    {/* noopener noreferrer may be obsolete: see https://web.dev/external-anchors-use-rel-noopener/ */ }
                    <Link href={repo.html_url} title={repo.name} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                    </Link>
                </Typography>
                <Typography gutterBottom variant="body2" component="div" className={classes.main}>
                    <RepoLanguage language={repo.language} />

                    <StarButton
                        starsCount={repo.watchers}
                        isStarred={isStarred}
                        onToggleStar={onToggleStar}
                    />
                </Typography>
                <Typography gutterBottom variant="body2">
                    {repo.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

GithubRepoCard.propTypes = {
    repo: githubRepoPropType.isRequired,
    isStarred: PropTypes.bool.isRequired,
    onToggleStar: PropTypes.func.isRequired,
};

export default GithubRepoCard;
