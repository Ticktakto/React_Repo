process.env.BABAL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandleRejection', err => {
    throw err;
});

require('../config/env');
const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/webpack.config.server');
const paths = require('../config/paths');

function build() {
    console.log('Creating Server build...');
    fs.emptyDirSync(paths.ssrBuild);
    let compiler = webpack(config);
    return new Promise((reslove, reject) => {
        compiler.run((err, stats) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(stats.toString());
        });
    });
}

build();
