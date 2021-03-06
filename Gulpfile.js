var gulp = require('gulp')
var browsersync = require('browser-sync')
var karma = require('karma').server



gulp.task('serve', function () {
	browsersync.init({
		notify: false,
		port: 8888,
		server: {
			baseDir: ['app'],
			routes: {
				'/bower_components': 'bower_components'
			}
		}
	})

	gulp.watch(['app/**/*.*'])
		.on('change', browsersync.reload);
})

gulp.task('test-browser',function(done){
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true,
		reporters:['mocha','coverage']
	},function(){
		done();
	})
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
