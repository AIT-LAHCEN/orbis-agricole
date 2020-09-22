const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {
    app.use(
        '/domaine',
        createProxyMiddleware({
            target: 'https://orbisagroindustry.live',
            changeOrigin: true,
        })
    );
};