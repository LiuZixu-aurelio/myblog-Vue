const scard1 = '知乎直播升级 - 2021'
  
/* const scard2 = '{background:url(require("/src/assets/zhihu.png")}' */
/* const scard2 = 'url( require("./src/assets/zhihu.png"))' */
const aa = require("/src/assets/project/zhihu.png")
const ab = 'url(' + aa +')'
const scard2 = {backgroundImage: ab}


const scard3 = [
    require('/src/assets/project/zhihu.png'),
    require('/src/assets/project/zhihu2.png'),
    require('/src/assets/project/zhihu3.png'),
    require('/src/assets/project/zhihu4.png'),
    require('/src/assets/project/zhihu5.png'),
    require('/src/assets/project/zhihu6.png'),
    require('/src/assets/project/zhihu7.png'),
    require('/src/assets/project/zhihu8.png'),
    require('/src/assets/project/zhihu9.png'),
    require('/src/assets/project/zhihu10.png'),
    require('/src/assets/project/zhihu11.png'),
    require('/src/assets/project/zhihu12.png'),
    require('/src/assets/project/zhihu13.png'),
    require('/src/assets/project/zhihu14.png'),
    require('/src/assets/project/zhihu15.png'),
    require('/src/assets/project/zhihu16.png'),
    require('/src/assets/project/zhihu17.png'),
    require('/src/assets/project/zhihu18.png'),
    require('/src/assets/project/zhihu19.png'),
    require('/src/assets/project/zhihu20.png'),
    require('/src/assets/project/zhihu21.png'),
    require('/src/assets/project/zhihu22.png'),
    require('/src/assets/project/zhihu23.png')
    ]

const scard4 ='/home/project/ZHIHU'


export { scard1 } //名称
export { scard2 } //卡片背景
export { scard3 } //内容
export { scard4 } //页面地址
