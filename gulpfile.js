// 定义 gulp 的打包规范

// 1,加载 依赖包

// gulp依赖包
const gulp = require('gulp');


// cssmin依赖包
const cssmin = require('gulp-cssmin');
// autoprefixer依赖包
const autoprefixer = require('gulp-autoprefixer');


// 加载js相关的依赖包

const uglify = require('gulp-uglify');
const babel = require('gulp-babel');



// html依赖包
const htmlmin = require('gulp-htmlmin');

// server依赖包
// const webserver = require('gulp-webserver');



// del依赖包
// const del = require('del');


const cssHandler = function(){
    return gulp.src('./src/css/*.css').pipe(autoprefixer()).pipe(cssmin()).pipe(gulp.dest("D:\\phpStudy\\WWW\\dgc\\dist\\css"));
    // gulp.src('./src/css/*.css')      指定要压缩的源文件内容
    // .pipe(autoprefixer())            先自动添加css语法中的兼容前缀
    // .pipe(cssmin())                  将 src() 中 执行路径下的指定文件,打包压缩
    // .pipe(gulp.dest('./dist/css'))   将 打包压缩的程序,存储在指定位置上
} 

// js的压缩规范

const jsHandler = function(){
    return gulp.src('./src/js/*.js')          // 设定打包的js文件位置
    .pipe(babel({presets:['@babel/env']}))    // 将其他语法规范,转化为ES5语法规范, babel() 中的参数是固定的语法格式
    .pipe(uglify())                           // 打包压缩js文件
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\dgc\\dist\\js"))             // 将 打包压缩的程序,存储在指定位置上
}

// html文件的打包压缩

const htmlHandler = function(){
    return gulp.src('./src/paging/*.html')    // 设定打包的html文件位置
           .pipe(htmlmin({
                collapseWhitespace: true,
                removeScriptTypeAttributes: true,
                minifyCSS:true,
                minifyJS : true
           }))
           .pipe(gulp.dest("D:\\phpStudy\\WWW\\dgc\\dist\\pages"))  
                  // 将 打包压缩的程序,存储在指定位置上
            // .pipe(gulp.dest("D:\\phpStudy\\WWW\\taobao"))
}



// 音频,视频,图片等,不打压缩,直接移动到指定的文件夹位置
// 将所有格式的图片,都移动到指定的文件夹位置中
// 添加到 watch 监听中 和 default 默认执行中

const imgHandler = function(){
    return gulp.src('./src/img/*.*')        // 指定要移动的图片的文件夹位置
           .pipe(gulp.dest("D:\\phpStudy\\WWW\\dgc\\dist\\img"))   // 指定移动到的文件夹位置
}


// 制定通过gulp来建立服务器

// const webserverHandler = function(){
//     return gulp.src('./dist')           // 指定的路径是压缩文件的路径,也就是在服务器上运行的都是压缩文件,提高页面中程序的执行效率
//     .pipe(webserver({
//         host : '127.0.0.1' ,            // 定义的域名地址,目前使用本地域名地址127.0.0.1,实际项目中,根据项目需求而定
//         port : 8080 ,                   // 定义端口号
//         open : './pages/index.html' ,   // 默认打开执行的网页,也就是 输入 127.0.0.1:8080 直接打开的网页
//                                         // 之前在 node.js 中 通过内置http模块 执行访问请求时 必须有 文件名称  127.0.0.1:8080/index.html
//                                         // 在 gulp 中 搭建的服务器 , 有默认的打开页面设定, 直接输入 127.0.0.1:8080 即可
//         livereload : true ,             // 热启动 当文件内容,代码,css,js等发生改变时,会自动重新加载页面,执行效果,不用手动刷新                                       
//     }))
// }



// 3,指定删除程序
// const delHandler = function(){
//     return del(["D:\\phpStudy\\WWW\\dgc\\dist"]);
// }


// 3,制定监听程序


const watchHandler = function(){
    gulp.watch('./src/css/*.css' , cssHandler);         // 监听 css 文件
    gulp.watch('./src/js/*.js' , jsHandler);            // 监听 js 文件
    gulp.watch('./src/paging/*.html' , htmlHandler);     // 监听 html 文件
    gulp.watch('./src/img/*.*' , imgHandler);        // 监听 图片 文件  
}


// 4,定义 gulp 的默认执行程序
module.exports.default = gulp.series(
    // delHandler,
    gulp.parallel(cssHandler,jsHandler,htmlHandler,imgHandler),   //  默认的,第一次,初始化,先执行一次所有的打包规范
    // webserverHandler,       // 通过 gulp 启动一个服务器 gulp 运行到 webserverHandler 会自动打开设定的默认页面,不用做任何操作
    watchHandler,
)


