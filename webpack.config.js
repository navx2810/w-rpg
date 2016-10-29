module.exports = {
    entry: `${__dirname}/client/src/index.ts`,
    output: {
        path: `${__dirname}/client/dist`,
        filename: "bundle.js"
    },

    resolve: {
        extensions: [ "", ".ts", ".tsx" ]
    },

    module: {
        loaders: [ 
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.html$/, loader: "html-loader" }
         ]
    }
}