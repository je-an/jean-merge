({
    baseUrl: '.',
    out: 'dist/jean-merge.js',
    optimize: 'uglify2',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/Merge"],
    wrap: {
        start:
            "(function (root, factory) { \n" +
            " \t if (typeof define === 'function' && define.amd) { \n" +
            "\t \t define([], factory); \n" +
            "\t} else if(typeof module === 'object' && module.exports) { \n" +
            "\t\t module.exports = factory(); \n " +
            "\t} else { \n" +
            "\t \troot.Merge = root.Merge || {}; \n" +
            "\t \troot.Merge = factory();\n" +
            "\t}\n" +
            "}(this, function() {",
        end:
            "\n \t return require('src/Merge'); \n" +
            "}));"
    },
    paths: {
        TypeCheck: "node_modules/jean-type-check/src/TypeCheck",
        Failure: "node_modules/jean-failure/src/Failure"
    }
})