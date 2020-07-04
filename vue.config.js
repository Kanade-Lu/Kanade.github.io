const CompressionWebpackPlugin = require('compression-webpack-plugin')


module.exports ={
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/style/common/public.scss";`
			}
		}
	},
	productionSourceMap: false,
	publicPath: './',
	configureWebpack:config => {
		//gzip
		if(process.env.NODE_ENV === 'production'){
			return {
				plugins:[
					new CompressionWebpackPlugin({
						test: /\.js$|\.html$|\.css/, //匹配文件名
						threshold: 10240, //对超过10k的数据进行压缩
						deleteOriginalAssets: false //是否删除原文件
					}),
					new HappyPack({
					    id: 'happybabel',
					    loaders: ['babel-loader?cacheDirectory'],
					    // 开启 4 个线程
					    threads: 4
					})
				]
			}
		}
	},
	module: {
	    rules: [
			{
			// js 文件才使用 babel
			test: /\.js$/,
			loader: 'babel-loader',
			// 只在 src 文件夹下查找
			include: [resolve('src')],
			// 不会去查找的路径
			exclude: /node_modules/
			}
		],
		loaders: [
		    {
		      test: /\.js$/,
		      include: [resolve('src')],
		      exclude: /node_modules/,
		      // id 后面的内容对应下面
		      loader: 'happypack/loader?id=happybabel'
		    }
		]
	}
	
}


