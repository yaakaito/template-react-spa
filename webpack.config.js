const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env = {}) => {
    const mode = env.mode || 'development'
    return {
        mode,
        entry: {
            index: './src/index.tsx',
        },
        output: {
            filename: '[name]-[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
            modules: [
              'node_modules'
            ],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: true,
                            }
                        }
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,

                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html'
            }),
        ],
        devServer: {
            contentBase: path.resolve(__dirname, '../dist'),
            port: 9000,
            historyApiFallback: {
                rewrites: [
                    { from: /./, to: '/' }
                ]
            }
        },
    }
}
