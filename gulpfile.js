import gulp from 'gulp';

const {src, dest, series, parallel, watch} = gulp;

const defaultTask = (cb) => {
  cb();
}

export default defaultTask;
