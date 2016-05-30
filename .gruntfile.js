module.exports = (grunt) => {
	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		"babel": {
			options: {
				babelrc:	false,
				compact:	true,
				comments:	false,
				sourceMap:	true,
				presets:	["es2015", "react"]
			},
			dist: {
				files: [{
					expand:	true,
					src:	"scripts/src/*.es",
					dest:	"../../scripts/babel/",
					ext:	".js"
				}]
			}
		},

		// define source files and their destinations
		uglify: {
			files: {
				src:		"scripts/babel/*.js",  // source files mask
				dest:		"scripts/min/",    // destination folder
				expand:		true,    // allow dynamic building
				flatten:	true,   // remove all unnecessary nesting
				ext: 		".min"   // replace .js to .min
			}
		},
		watch: {
			js:  { files: "js/*.js", tasks: [ "uglify" ] }
		}
	});

	// load plugins
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	// register at least this one task
	grunt.registerTask("default", ["babel", "uglify"]);
};
