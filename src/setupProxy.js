const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {
    app.use(
        '/domaine',
        createProxyMiddleware({
            target: 'http://newsorbisagro-env.eba-pnjc2jvm.eu-west-3.elasticbeanstalk.com/',
            changeOrigin: true,
        })
    );
};