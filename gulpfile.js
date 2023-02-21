const {src, dest , watch, parallel}  = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber')
function css (done){
    src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest('build/css'))
    done();
}

function javascript (done){
    src('src/js/**/*.js')
    .pipe(dest('build/js'))
    done();
}

function dev(done){
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
    done();
}

exports.css = css;
exports.js = javascript;
exports.dev = parallel(dev, javascript)