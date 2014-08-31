var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    child_process = require('child_process');

gulp.task('development', function(){
	child_process.exec('mongod --dbpath ./db', function(err, stdout, stderr){
		console.log(stdout);
	});

    nodemon({ script: 'server.js', ext: 'js'})
    	.on('restart', function(){
    		console.log('Server restarted...');
    	})
});
