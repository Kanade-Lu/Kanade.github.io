const CompressionWebpackPlugin = require('compression-webpack-plugin')


module.exports ={
	
	publicPath: './',
	configureWebpack:config => {
		if(process.env.NODE_ENV === 'production'){
			return {
				plugins:[new CompressionWebpackPlugin({
					test: /\.js$|\.html$|\.css/, //匹配文件名
					threshold: 10240, //对超过10k的数据进行压缩
					deleteOriginalAssets: false //是否删除原文件
					
				})]
			}
		}
	}
	
}


