module.exports = {
	css: {
		loaderOptions: {
			less: {
				globalVars: {
					primary: "#56AF84",
					black: "#262626",
					grey: "#f1f1f1",
					darkGrey: "#cfcfcf",
					mobileS: '(max-width: 320px)',
					mobileM: '(max-width: 375px)',
					mobileL: '(max-width: 425px)',
					tablet: '(max-width: 768px) and (min-width: 426px)',
					ipadPro: '(min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2)',
					laptop: '(max-width: 1024px)',
					laptopL: '(max-width: 1440px)',
					desktop: '(max-width: 2560px)',
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
