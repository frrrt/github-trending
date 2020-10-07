import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import StarBorderIcon from '@material-ui/icons/StarBorderRounded';
import StarIcon from '@material-ui/icons/StarRounded';

const StarButton = ({ starsCount, isStarred, onToggleStar }) => (
    <Button
        variant={isStarred ? 'contained' : 'outlined'}
        color="secondary"
        size="small"
        startIcon={isStarred ? <StarIcon /> : <StarBorderIcon />}
        onClick={onToggleStar}
    >
        {starsCount + Number(isStarred)}
    </Button>
);

StarButton.propTypes = {
    isStarred: PropTypes.bool.isRequired,
    starsCount: PropTypes.number.isRequired,
    onToggleStar: PropTypes.func.isRequired,
};

export default StarButton;
