const pluginTester = require('babel-plugin-tester').default;
const replacePlugin = require('./plugin/replace');


pluginTester({
    plugin: replacePlugin,
    pluginOptions: {
        param: 'c'
    },
    tests: [
        {
            code: 'b + c;',
            output: 'c + b;',
        },
        {
            code: 'a === 1;',
            output: '1 === a;',
        },
        {
            code: 'const a = 1;',
            output: 'const a = 1;'
        }
    ]
})