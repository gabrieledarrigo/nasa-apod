import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import buffer from 'vinyl-buffer';
import cssmin from 'gulp-cssmin';
import del from 'del';
import rename from "gulp-rename";
import sass from 'gulp-sass';
import sequence from 'run-sequence';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

gulp.task('clean', () => {
    return del([
        './dist'
    ]);
});

gulp.task('js', () => {
    return browserify({
            entries: './src/apod/index.js',
            extensions: ['.js', '.jsx'],
            debug: true
        })
        .transform('babelify', {
            presets: ['es2015', 'react']
        })
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(rename('bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('uglify', () => {
    return gulp.src('./dist/js/bundle.js')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('scss', () => {
    return gulp.src('./src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
                outputStyle: 'expanded'
            })
            .on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('cssmin', () => {
    return gulp.src('./dist/css/style.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', () => {
    gulp.watch('./src/scss/**/*.scss', ['scss']);
    gulp.watch('./src/apod/**/*.js', ['js']);
});

gulp.task('copy', () => {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('serve', () => {
    const bs = browserSync.create();

    return bs.init({
        server: './dist'
    });
});

gulp.task('build', () => {
    sequence(
        ['clean'],
        ['scss', 'js'],
        ['cssmin', 'uglify'],
        ['copy']
    );
});