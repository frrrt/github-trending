require('dotenv').config();

module.exports = {
    webpack: (config, { dev }) => {
        if (dev) {
            config.module.rules.push({
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {},
            });
        }

        return config;
    },
};
