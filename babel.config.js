module.exports = {
    presets: [
        'next/babel',
    ],
    plugins: [
        ['@babel/plugin-transform-runtime', {
            asyncGenerators: false,
            generators: false,
            async: false,
        }],
        ['module-resolver', {
            root: ['./dist'],
            alias: {
                utilities: './utilities',
                components: './components',
            },
        }],
        [
            'styled-components',
            {
                ssr: true,
                displayName: true,
                preprocess: false,
            },
        ],
    ],
};
