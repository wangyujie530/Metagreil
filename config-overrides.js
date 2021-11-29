/*
 * @Author: your name
 * @Date: 2021-11-27 19:49:47
 * @LastEditTime: 2021-11-28 12:06:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \remf:\2171\2021xxs\metaglassA\config-overrides.js
 */
const {
    override,
   
} = require('customize-cra');
const rewirePostcss = require('react-app-rewire-postcss');
const px2rem = require('postcss-px2rem') 
module.exports = override( 
   (config, env) => {
       // 重写postcss
       rewirePostcss(config, {
           plugins: () => [
               require("postcss-flexbugs-fixes"),
               require("postcss-preset-env")({
                   autoprefixer: {
                       flexbox: "no-2009",
                   },
                   stage: 3,
               }),
               //关键:设置px2rem
               px2rem({
                   remUnit: 75,
                   exclude: /node-modules/i,
               }),
           ],
       });

       return config;
   }
)