const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
	app.use(
		createProxyMiddleware('/homeserver',{ 
			target:'https://jenlog.herokuapp.com',
			changeOrigin:true,
			pathRewrite:{'^/homeserver':''} 
		})
	)
}
