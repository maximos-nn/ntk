import gulp from 'gulp';
import sass from 'gulp-sass';
import compiler from 'node-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';

sass.compiler = compiler;
const server = browserSync.create();

const {src, dest, series, parallel, watch} = gulp;

const css = () => src('source/sass/style.scss', {sourcemaps: true})
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer()]))
  .pipe(dest('source/css', {sourcemaps: '.'}));

export default () => {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  watch('source/sass/**/*.{scss,sass}', css);
};
