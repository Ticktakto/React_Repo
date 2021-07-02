const nodeExternals = require('webpack-node-externals');
const paths = require('./paths');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const webpack = require('webpack');
const getClientEnvironment = require('./env');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

module.exports = {
    mode: 'production', // 해당 모드로 설정하여 최적화 옵션 활성화
    entry: paths.ssrIndexJs, // entry path
    target: 'node', // node 환경에서 구동 됨을 명시
    output: {
        path: paths.ssrBuild, // build path
        filename: 'server.js', // file name
        chunkFilename: 'js/[name].chunk.js', // chunk file name
        publicPath: paths.publicUrlOrPath, // 정적 파일이 제공될 경로
    },
    module: {
        rules: [
            {
                oneOf: [{
                    // JS 위한 처리
                    // 기존 webpack.config.js 참고
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    include: paths.appSrc,
                    loader: require.resolve('babel-loader'),
                    options: {
                        customize: require.resolve(
                            'babel-present-react-app/webpack-overrides'
                        ),
                        presets: [
                            [
                                require.resolve('babel-preset-react-app'),
                                {
                                    runtime: 'automatic',

                                },
                            ],
                        ],
                        plugins: [
                            [
                                require.resolve('babel-plugin-named-asset-import'),
                                {
                                    loaderMap: {
                                        svg: {
                                            ReactComponent:
                                            '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                                        },
                                    },
                                },
                            ],
                        ],
                        cacheDirectory: true,
                        cacheCompression: false,
                        compact: false,
                    },

                },
                // Css 위한 처리
                {
                    test: cssRegex,
                    exclude: cssModuleRegex,
                    //exportOnlyLocals : true 옵션을 설정해야 실제 css 생성하지 않음!
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                        modules: {
                            exportOnlyLocals: true,
                        },
                    },
                },
                // Css Module 위한 처리
                {
                    test: cssModuleRegex,
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                        modules: {
                            exportOnlyLocals: true,
                            getLocalIdent: getCSSModuleLocalIdent,
                        },
                    },
                },
                // Sass 위한 처리
                {
                    test: sassRegex,
                    exclude: sassModuleRegex,
                    use: [
                        {
                            loader: require.resolve('css-loader'),
                            options: {
                                importLoaders: 3,
                                modules: {
                                    exportOnlyLocals: true,
                                },
                            },
                        },
                        require.resolve('sass-loader'),
                    ],
                },
                // Sass + CSS Module 위한 처리
                {
                    test: sassRegex,
                    exclude: sassModuleRegex,
                    use: [
                        {
                            loader: require.resolve('css-loader'),
                            options: {
                                importLoaders: 3,
                                modules: {
                                    exportOnlyLocals: true,
                                    getLocalIdent: getCSSModuleLocalIdent,
                                },
                            },
                        },
                        require.resolve('sass-loader'),
                    ],
                },
            //url-loader 위한 설정
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    emitFile: false, // 파일을 따로 저장하지 않는 옵션
                    limit: 10000, // 원래는 9.76KB가 넘어가면 파일로 저장하지만
                    // emitFile = false 이면 경로만 준비하고 파일은 저장하지 않음
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            // 위해서 설정된 확장자를 제외한 파일들은 file-loader 사용
            {
                loader: require.resolve('file-loader'),
                exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                options: {
                    emitFile: false,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            ]
        },
    ]
    },
    resolve: {
        modules: ['node_modules']
    },
    externals: [nodeExternals({
            allowlist: [/@babel/],
        }),
    ],

};