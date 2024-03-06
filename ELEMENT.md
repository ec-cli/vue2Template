## element-ui的主题颜色切换

---
### 1.安装vue-cli
*如果vue-cli已经安装，可省略该步骤！*
```
    npm install -g vue-cli
    vue init webpack vue_demo
    cd vue_demo
    npm install
    npm run dev
```

### 2.安装element-ui及sass
*如果已经安装，可省略该步骤！*
```
    npm i element-ui -S
    npm install --save-dev sass-loader
    npm install --save-dev node-sass
```

### 3.安装elementui的自定义主题工具
```
    npm i element-theme -g
    npm i element-theme-chalk -D
```

### 4.初始化变量文件
*执行成功之后注意观察项目根目录会产生一个element-variables.scss文件*
```
    et -i element-variables.scss
```

### 5.编译主题
*根据设计图修改 ***element-variables.scss*** 中的相关颜色代码，修改完成以后在 命令行输入 **et***

### 6.编译完成之后在主目录下生成theme的文件夹（此文件下的fonts以后有用）

### 7.在main.js入口文件中引入
```
    import '../theme/index.css'
```

### 8.使用gulp-css-wrap神器
```
    npm install  gulp -g
    npm install gulp-clean-css
    npm install gulp-css-wrap
```
### 9.在项目根目录下创建一个名为 gulpfile.js 的文件
***custom-light中的light即为刚才生成自定义主题的命名空间2***
```
    // gulpfile.js
    var path = require('path')
    var gulp = require('gulp')
    var cleanCSS = require('gulp-clean-css')
    var cssWrap = require('gulp-css-wrap')
    gulp.task('css-wrap', function () {
        return gulp.src(path.resolve('./theme/index.css'))
        /* 找需要添加命名空间的css文件，支持正则表达式 */
            .pipe(cssWrap({
                selector: '.custom-light' /* 添加的命名空间 */
            }))
            .pipe(cleanCSS())
            .pipe(gulp.dest('src/assets/theme/light')) /* 存放的目录 */
    })
```

### 10.在命令行中执行gulp输出
```
    gulp css-wrap
```

### 11.生成theme文件夹下的主题名称(/src/assets/theme文件夹下)
***此时文件夹下没有fonts文件夹，把生成主题时生成的fonts复制到此处即可***

### 12.在vuex中存储主题状态
```
    //示例
    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    const store = new Vuex.Store({
        state:{
            themecolor:'light'//默认为light
        },
        mutations:{
            //切换主题
            setThemeColor(state,curcolor){
                this.state.themecolor = curcolor;
            }
        }
    });
    export default store;
```
**在main.js入口文件中引入**
```
    import './assets/css/theme/light/index.css';
```

***双主题切换具体操作参见本项目***
