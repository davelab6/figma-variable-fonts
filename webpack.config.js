var configure = require('react-figma-webpack-config');
module.exports = configure({
    entry: {
        ui: './src/ui.js', // The entry point for your UI code
        code: './src/code.js' // The entry point for your plugin code
    },
});