module.exports = {
	css: {
		loaderOptions: {
			less: {
				globalVars: {
					primary: "#56AF84",
					black: "#262626",
					grey: "#f1f1f1",
					darkGrey: "#cfcfcf"
				}
			}
		}
	},
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'VuFly'
				return args
			})
	}
};
