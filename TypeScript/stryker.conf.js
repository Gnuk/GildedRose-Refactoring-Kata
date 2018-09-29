module.exports = function(config) {
    config.set({
        testRunner: "mocha",
        mutator: "typescript",
        transpilers: ["typescript"],
        reporters: ["clear-text", "progress"],
        packageManager: "npm",
        testFramework: "mocha",
        coverageAnalysis: "perTest",
        tsconfigFile: "tsconfig.json",
        mutate: ["app/**/*.ts"]
    });
};
