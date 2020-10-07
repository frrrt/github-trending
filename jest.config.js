module.exports = {
    setupFiles: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['/.next/', '/node_modules/'],
    collectCoverageFrom: ['lib/src/**/*.js', 'store/reducer/**/*.js', 'pages/**/*.js', '!pages/_app.js', '!pages/_document.js'],
};
