// Defining requirements
const gulp = require( 'gulp' );
const plumber = require( 'gulp-plumber' );
const sass = require('gulp-sass')(require('sass'));
const babel = require( 'gulp-babel' );
const postcss = require( 'gulp-postcss' );
const touch = require( 'gulp-touch-fd' );
const rename = require( 'gulp-rename' );
const concat = require( 'gulp-concat' );
const inject = require('gulp-inject-string');
const uglify = require( 'gulp-uglify' );
const imagemin = require( 'gulp-imagemin' );
const sourcemaps = require( 'gulp-sourcemaps' );
const browserSync = require( 'browser-sync' ).create();
const del = require( 'del' );
const cleanCSS = require( 'gulp-clean-css' );
const replace = require( 'gulp-replace' );
const autoprefixer = require( 'autoprefixer' );

// Configuration file to keep your code DRY
const cfg = require( './gulpconfig.json' );
const paths = cfg.paths;

/**
 * Compiles .scss to .css files.
 *
 * Run: gulp sass
 */
gulp.task( 'sass', function() {
	var stream = gulp
		.src( paths.sass + '/*.scss' )
		.pipe(
			plumber( {
				errorHandler( err ) {
					console.log( err );
					this.emit( 'end' );
				},
			} )
		)
		.pipe( sourcemaps.init( { loadMaps: true } ) )
		.pipe( sass( { errLogToConsole: true } ) )
		.pipe( postcss( [ autoprefixer() ] ) )
		.pipe( sourcemaps.write( undefined, { sourceRoot: null } ) )
		.pipe( gulp.dest( paths.css ) )
		.pipe( touch() );
	return stream;
} );
gulp.task( 'inc', function() {
	var stream = gulp
		.src( paths.inc + '/*.scss' )
		.pipe(
			plumber( {
				errorHandler( err ) {
					console.log( err );
					this.emit( 'end' );
				},
			} )
		)
		.pipe( sourcemaps.init( { loadMaps: true } ) )
		.pipe( sass( { errLogToConsole: true } ) )
		.pipe( postcss( [ autoprefixer() ] ) )
		.pipe( sourcemaps.write( undefined, { sourceRoot: null } ) )
		.pipe( gulp.dest( paths.css ) )
		.pipe( touch() );
	return stream;
} );

/**
 * Optimizes images and copies images from src to dest.
 *
 * Run: gulp imagemin
 */
gulp.task( 'imagemin', () =>
	gulp
		.src( paths.imgsrc + '/**' )
		.pipe(
			imagemin(
				[
					// Bundled plugins
					imagemin.gifsicle( {
						interlaced: true,
						optimizationLevel: 3,
					} ),
					imagemin.mozjpeg( {
						quality: 100,
						progressive: true,
					} ),
					imagemin.optipng(),
					imagemin.svgo(),
				],
				{
					verbose: true,
				}
			)
		)
		.pipe( gulp.dest( paths.img ) )
);

/**
 * Minifies css files.
 *
 * Run: gulp minifycss
 */
gulp.task( 'minifycss', function() {
	return gulp
		.src( [
			paths.css + '/theme.css',
		] )
		.pipe(
			sourcemaps.init( {
				loadMaps: true,
			} )
		)
		.pipe(
			cleanCSS( {
				compatibility: '*',
			} )
		)
		.pipe(
			plumber( {
				errorHandler( err ) {
					console.log( err );
					this.emit( 'end' );
				},
			} )
		)
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( paths.css ) )
		.pipe( touch() );
} );
gulp.task( 'incminifycss', function() {
	return gulp
		.src( [
			paths.css + '/theme.css',
		] )
		.pipe(
			sourcemaps.init( {
				loadMaps: true,
			} )
		)
		.pipe(
			cleanCSS( {
				compatibility: '*',
			} )
		)
		.pipe(
			plumber( {
				errorHandler( err ) {
					console.log( err );
					this.emit( 'end' );
				},
			} )
		)
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( paths.css ) )
		.pipe( touch() );
} );

/**
 * Delete minified CSS files and their maps
 *
 * Run: gulp cleancss
 */
gulp.task( 'cleancss', function() {
	return del( paths.css + '/*.min.css*' );
} );
gulp.task( 'inccleancss', function() {
	return del( paths.css + '/*.min.css*' );
} );

/**
 * Compiles .scss to .css minifies css files.
 *
 * Run: gulp styles
 */
gulp.task( 'styles', function( callback ) {
	gulp.series( 'sass', 'minifycss' )( callback );
} );
gulp.task( 'stylesinc', function( callback ) {
	gulp.series( 'inc', 'incminifycss' )( callback );
} );

/**
 * Watches .scss, .js and image files for changes.
 * On change re-runs corresponding build task.
 * 
 * Run: gulp watch
 */
gulp.task( 'watch', function() {
	gulp.watch(
		[ paths.sass + '/**/*.scss', paths.sass + '/*.scss' ],
		gulp.series( 'styles' )
	);
	gulp.watch(
		[ paths.sass + '/**/*.scss', paths.inc + '/*.scss' ],
		gulp.series( 'stylesinc' )
	);
	gulp.watch(
		[
			paths.dev + '/js/**/*.js',
			'./assets/js-load-first/*.js',
			'./assets/js/*.js',
			'./assets/js/**/*.js',
		],
		gulp.series( 'scripts' )
	);

	// Inside the watch task.
	gulp.watch( paths.imgsrc + '/**', gulp.series( 'imagemin-watch' ) );
} );

/**
 * Starts browser-sync task for starting the server.
 *
 * Run: gulp browser-sync
 */
gulp.task( 'browser-sync', function() {
	browserSync.init( cfg.browserSyncOptions );
} );

/**
 * Ensures the 'imagemin' task is complete before reloading browsers
 */
gulp.task(
	'imagemin-watch',
	gulp.series( 'imagemin', function() {
		browserSync.reload();
	} )
);

/**
 * Starts watcher with browser-sync.
 * Browser-sync reloads page automatically on your browser.
 * 
 * Run: gulp watch-bs
 */
gulp.task( 'watch-bs', gulp.parallel( 'browser-sync', 'watch' ) );

// Run:
// gulp scripts.
// Uglifies and concat all JS files into one
gulp.task( 'scripts', function() {
	var scripts = [
		// Start - All BS4 stuff
		paths.dev + '/js/bootstrap4/bootstrap.bundle.js',
		paths.assets + '/js-load-first/*.js',
		paths.assets + '/js/*.js',
		paths.assets + '/js/**/*.js',

		// End - All BS4 stuff

		// Adding currently empty javascript file to add on for your own themes´ customizations
		// Please add any customizations to this .js file only!
		paths.dev + '/js/custom-javascript.js',
	];
	gulp
		.src( scripts, { allowEmpty: true } )
		.pipe( babel( { presets: ['@babel/preset-env'] } ) )
		.pipe( concat( 'theme.min.js' ) )
		.pipe( uglify() )
		.pipe(inject.prepend('(function($){$(document).ready(function(){'))
        .pipe(inject.append('});}(jQuery));'))
		.pipe( gulp.dest( paths.js ) );

	return gulp
		.src( scripts, { allowEmpty: true } )
		.pipe( babel() )
		.pipe( concat( 'theme.js' ) )
		.pipe(inject.prepend('(function($){ \n $(document).ready(function(){ \n'))
        .pipe(inject.append('\n }); \n }(jQuery)); \n'))
		.pipe( gulp.dest( paths.js ) );
} );

// Deleting any file inside the /src folder
gulp.task( 'clean-source', function() {
	return del( [ 'src/**/*' ] );
} );

// Run:
// gulp copy-assets.
// Copy all needed dependency assets files from node_modules to theme

////////////////// All Bootstrap SASS  Assets /////////////////////////
gulp.task( 'copy-assets', function( done ) {
	////////////////// All Bootstrap 4 Assets /////////////////////////
	// Copy all JS files
	var stream = gulp
		.src( paths.node + '/bootstrap/dist/js/**/*.js' )
		.pipe( gulp.dest( paths.dev + '/js/bootstrap4' ) );

	// Copy all Bootstrap SCSS files
	gulp
		.src( paths.node + '/bootstrap/scss/**/*.scss' )
		.pipe( gulp.dest( paths.dev + '/sass/bootstrap4' ) );

	////////////////// End Bootstrap 4 Assets /////////////////////////

	// Copy all Font Awesome Fonts
	gulp
		.src( paths.node + '/font-awesome/fonts/**/*.{ttf,woff,woff2,eot,svg}' )
		.pipe( gulp.dest( paths.fonts ) );

	// Copy all Font Awesome SCSS files
	gulp
		.src( paths.node + '/font-awesome/scss/*.scss' )
		.pipe( gulp.dest( paths.dev + '/sass/fontawesome' )	);

	done();
} );

/**
 * Deletes all files inside the dist folder and the folder itself.
 *
 * Run: gulp clean-dist
 */
gulp.task( 'clean-dist', function() {
	return del( paths.dist );
} );

// Run
// gulp dist
// Copies the files to the dist folder for distribution as simple theme
gulp.task(
	'dist',
	gulp.series( [ 'clean-dist' ], function() {
		return gulp
			.src(
				[
					'**/*',
					'!' + paths.node,
					'!' + paths.node + '/**',
					'!' + paths.dev,
					'!' + paths.dev + '/**',
					'!' + paths.dist,
					'!' + paths.dist + '/**',
					'!' + paths.distprod,
					'!' + paths.distprod + '/**',
					'!' + paths.sass,
					'!' + paths.sass + '/**',
					'!' + paths.composer,
					'!' + paths.composer + '/**',
					'!+(readme|README).+(txt|md)',
					'!*.+(json|js|lock|xml)',
					'!CHANGELOG.md',
				],
				{ buffer: true }
			)
			.pipe( gulp.dest( paths.dist ) )
			.pipe( touch() );
	} )
);

/**
 * Deletes all files inside the dist-product folder and the folder itself.
 *
 * Run: gulp clean-dist-product
 */
gulp.task( 'clean-dist-product', function() {
	return del( paths.distprod );
} );

// Run
// gulp dist-product
// Copies the files to the /dist-prod folder for distribution as theme with all assets
gulp.task(
	'dist-product',
	gulp.series( [ 'clean-dist-product' ], function() {
		return gulp
			.src( [
				'**/*',
				'!' + paths.node,
				'!' + paths.node + '/**',
				'!' + paths.composer,
				'!' + paths.composer + '/**',
				'!' + paths.dist,
				'!' + paths.dist + '/**',
				'!' + paths.distprod,
				'!' + paths.distprod + '/**',
			] )
			.pipe( gulp.dest( paths.distprod ) )
			.pipe( touch() );
	} )
);

// Run
// gulp compile
// Compiles the styles and scripts and runs the dist task
gulp.task( 'compile', gulp.series( 'styles', 'scripts', 'dist' ) );

// Run:
// gulp
// Starts watcher (default task)
gulp.task( 'default', gulp.series( 'watch' ) );