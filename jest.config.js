module.exports = {
    testEnvironment: 'jsdom',
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'test-results',
                outputName: 'junit.xml',
            },
        ],
    ],
};
