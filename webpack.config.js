var path = require("path");
var configure = require('react-figma-webpack-config');

module.exports = configure({
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist') // Compile into a folder called "dist"
    },
});