// eslint-disable-next-line @typescript-eslint/no-var-requires
const jestCommon = require('./test/jest-common');

module.exports = {
    ...jestCommon,
    projects: [
        './test/jest.client.js',
        './test/jest.server.js',
    ],
};
