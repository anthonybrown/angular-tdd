var gulp = require('gulp')
var browsersync = require('browser-sync')

gulp.task('serve', function () {
	browsersync.init({
		notify: false
	,	port: 8888
	,	server: {
			baseDir: ['app']
		,	routes: {
				'/bower_components': 'bower_components'
			}
		}
	})

	gulp.watch(['app/**/*.*'])
		.on('change', browsersync.reload);
})

gulp.task('serve-test', function () {
	browsersync.init({
		notify: false,
		port: 8081,
		server: {
			baseDir: ['test', 'app'],
			routes: {
				'/bower_components': 'bower_components'
			}
		}
	})

	gulp.watch(['app/**/*.*'])
		.on('change', browsersync.reload);
})

