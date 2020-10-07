import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from '@material-ui/core';

import { format, addWeeks } from 'date-fns';

import { toggleStar } from '../store/actions';
import githubRepoPropType from '../lib/proptypes/githubRepoPropType';
import Headline from '../lib/src/github-trending/Headline';
import FilterBar from '../lib/src/github-trending/FilterBar';
import GithubRepoList from '../lib/src/github-trending/GithubRepoList';
import GithubTrendingHead from '../lib/src/github-trending/GithubTrendingHead';

export const GithubTrendingPage = ({
    repos,
    starred,
    onToggleStar,
}) => {
    const [language, setLanguage] = useState(null);
    const [isStarredFiltered, setIsStarredFiltered] = useState(false);

    const filteredRepos = repos
        .filter(repo => !isStarredFiltered || starred[repo.id])
        .filter(repo => language === null || (repo.language === language));

    return (
        <>
            <GithubTrendingHead />

            <Container maxWidth="md">
                <Headline>Github Trending</Headline>

                <FilterBar
                    isStarredFiltered={isStarredFiltered}
                    availableLanguages={repos.map(repo => repo.language).filter(repo => Boolean(repo))}
                    onChangeStarred={() => setIsStarredFiltered(c => !c)}
                    onChangeLanguage={setLanguage}
                />

                <GithubRepoList
                    filteredRepos={filteredRepos}
                    starred={starred}
                    onToggleStar={repoId => onToggleStar(repoId, repos.map(rp => rp.id))}
                />
            </Container>
        </>
    );
};

GithubTrendingPage.propTypes = {
    repos: PropTypes.arrayOf(githubRepoPropType).isRequired,
    starred: PropTypes.shape({}).isRequired,
    onToggleStar: PropTypes.func.isRequired,
};

export async function getStaticProps() {
    const dateOneWeekAgo = format(addWeeks(new Date(), -1), 'yyyy-MM-dd');

    const res = await fetch(`https://api.github.com/search/repositories?q=created:%3E${dateOneWeekAgo}&sort=stars&order=desc`);
    const repos = await res.json();

    return {
        props: {
            // This mapping saves space in the html file, since the api request is so big and the props get appended automatically by nextjs!
            // Although it is a little lengthy, it is hard to think of a better solution. Moving it into separat file feels like putting too
            // much space between the solution and the problem. Also using pick() from lodash/ramda feels like overkill.
            repos: repos.items?.map(({
                id,
                name,
                // eslint-disable-next-line camelcase
                html_url,
                description,
                watchers,
                language,
            }) => ({
                id,
                name,
                html_url,
                description,
                watchers,
                language,
            })),
        },
        // stale-while-revalidate, see https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
        revalidate: 10,
    };
}

export default connect(
    state => ({ ...state.githubTrending }),
    dispatch => bindActionCreators({
        onToggleStar: toggleStar,
    }, dispatch),

)(GithubTrendingPage);
