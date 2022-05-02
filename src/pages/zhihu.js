const scard1 = '知乎直播升级 - 2021'
  
/* const scard2 = '{background:url(require("/src/assets/zhihu.png")}' */
/* const scard2 = 'url( require("./src/assets/zhihu.png"))' */
const aa = require("/src/assets/zhihu.png")
const ab = 'url(' + aa +')'
const scard2 = {backgroundImage: ab}


const a = require('/src/assets/zhihu.png')
const b = require('/src/assets/zhihu2.png')

const scard3 = [a,b]
/* ['../assets/zhihu.png','../assets/zhihu2.png'] */

const scard4 ='/home/project/ZHIHU'


export { scard1 } //名称
export { scard2 } //卡片背景
export { scard3 } //内容
export { scard4 } //页面地址
