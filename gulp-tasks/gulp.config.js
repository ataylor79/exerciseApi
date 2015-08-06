module.exports = function () {
	'use strict';
	//directories
	var dir = {
		src: 'src',
		dev: 'dev',
		prod: 'dist',
		sassCache: '.sass-cache'
	};

	var config = {

		src: {
			html: {
				files: dir.src + '/templates/pages/**/*.swig',
				data: dir.src + '/templates/pages/global.json',
				watch: dir.src + '/templates/**/**/*.swig'
			},
			json: {
				watch: dir.src + '/templates/pages/*.json'
			},
			scss: {
				files: dir.src + '/scss/{app,legacy}.scss',
				assets: dir.src + '/scss/assets/**/*.*',
				watch: dir.src + '/scss/**/*.scss',
				hologram: dir.src + '/scss/style-guide.scss'
			},
			js: {
				files: [ dir.src + '/js/{*, **/*}.js', '!' + dir.src + '/js/vendor/*.js'],
				vendor: dir.src + '/js/vendor/*.js',
				watch: dir.src + '/js/**/*.js'
			},
			images: dir.src + '/img/**/*.*',
			data: dir.src + '/data/*.json'
		},

		dev: {
			html: dir.dev + '/*.html',
			css: dir.dev + '/css/*.css',
			js: dir.dev + '/js/{*, **/*}.js',
			jsVendor: dir.dev + '/js/vendor/*.js',
			cssAssets: dir.dev + '/css/assets/**/*.*',
			images: dir.dev + '/img/**/*.*',
			hologram: dir.dev + '/style-guide/**/*.*',
			hologramCSS: dir.dev + '/style-guide/css/*.css',
			htmlFiles: dir.dev + '/{*.html,category/**/*.html,!(style-guide)/*.html,utility/**/*.html}',
			data: dir.dev + '/data/*.json'
		},

		dest: {
			dev: {
				html: dir.dev,
				css: dir.dev + '/css/',
				cssAssets: dir.dev + '/css/assets/',
				js: dir.dev + '/js/',
				jsVendor: dir.dev + '/js/vendor/',
				images: dir.dev + '/img/',
				data: dir.dev + '/data/',
				hologramCss: dir.dev + '/style-guide/css/'
			},
			prod: {
				root: dir.prod,
				css: dir.prod + '/css',
				js: dir.prod + '/js',
				jsVendor: dir.prod + '/js/vendor',
				cssAssets: dir.prod + '/css/assets/',
				images: dir.prod + '/img/',
				hologram: dir.prod + '/style-guide/'
			}
		},

		appFiles: {
			css: dir.prod + '/css/*.css',
			js:  dir.prod +  '/js/*.js',
			jsAppName: 'app'
		},

		browserify: {
			entries: ['./' + dir.src + '/js/main.js'],
			fileName: 'bundle.js'
		},

		// Autoprefixer array
		autoprefixerBrowsers: [
			'ie >= 9', // open for debate!
			'ie_mob >= 10',
			'ff >= 28',
			'chrome >= 34',
			'safari >= 7',
			'opera >= 23',
			'ios >= 5',
			'android >= 4.2',
			'bb >= 10'
		],

		ignoredCssRules: [
			// ignored CSS for prod build
			// use regex or string
		],

		stripComment: {
			css: {
				start: 'start-css-comments',
				end: 'end-css-comments'
			},
			js: {
				start: 'start-namespace',
				end: 'end-namespace'
			}
		},

		karma: {
			configFile: './karma.conf.js'
		}


	};

	return {
		config: config,
		dir: dir
	};
};
