var path = require('path');

module.exports = {
    mode: 'none',
    entry: {
        pageOne: './src/index.js',
        pageTwo: './src/index2.js',
        pageThree: './src/index3.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        chunkFilename: '[id].[chunkhash].js'
    }
}

// 이렇게 하면 여러개의 entry에서 각각의 js파일로 빌드할 수 있다.