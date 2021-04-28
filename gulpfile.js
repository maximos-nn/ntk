import gulp from 'gulp';
import sass from 'gulp-sass';
import compiler from 'node-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';

sass.compiler = compiler;
const server = browserSync.create();

const {src, dest, series, parallel, watch} = gulp;

const makeCss = () => src('source/sass/style.scss', {sourcemaps: true})
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer]))
  .pipe(csso())
  .pipe(rename('style.min.css'))
  .pipe(dest('source/css', {sourcemaps: '.'}))
  .pipe(server.stream());

const runServer = (cb) => {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  cb();
};

const reloadServer = (cb) => {
  server.reload();
  cb();
};

const watchFiles = (cb) => {
  watch('source/sass/**/*.{scss,sass}', makeCss);
  watch('source/*.html', reloadServer);
  cb();
};

export default series(makeCss, runServer, watchFiles);
