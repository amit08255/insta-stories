// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// Used to set folders as alias to directly use in nextjs
const nextConfiguration = ({
    publicRuntimeConfig: {
    // Will be available on both server and client
        NODE_ENV: process.env.NODE_ENV,
    },
    webpack: (config) => {
        const newConfig = config;
        newConfig.resolve.alias.utilities = path.join(__dirname, 'utilities'); // folder alias 1
        newConfig.resolve.alias.components = path.join(__dirname, 'components'); // folder alias 2
        return newConfig;
    },
});

module.exports = nextConfiguration;
