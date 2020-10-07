import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Box } from '@material-ui/core';

const Headline = ({ children }) => (
    <Box mt={4}>
        <Typography variant="h2" component="h1">{children}</Typography>
    </Box>
);

Headline.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Headline;
