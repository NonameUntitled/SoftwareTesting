// eslint-disable-next-line no-undef
module.exports = {
    pages: {
        'index': {
            entry: './src/pages/Home/main.js',
            template: 'public/index.html',
            title: 'Home',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        'about': {
            entry: './src/pages/About/main.js',
            template: 'public/index.html',
            title: 'About',
            chunks: ['chunk-vendors', 'chunk-common', 'about']
        },
        'animePage': {
            entry: './src/pages/Anime/main.js',
            template: 'pubic/index.html',
            title: 'Anime Page',
            chunks: ['chunk-vendors', 'chunk-common', 'animePage']
        }
    }
}
