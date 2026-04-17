import { asset } from '../utils/asset.js'
const scard1 = '知乎直播升级 - 2021'
  
/* const scard2 = '{background:url(asset("/src/assets/zhihu.png")}' */
/* const scard2 = 'url( require("./src/assets/zhihu.png"))' */
const aa = asset("/src/assets/project/zhihu/zhihu.png")
const ab = 'url(' + aa +')'
const scard2 = {backgroundImage: ab}


const scard3 = [
    asset('/src/assets/project/zhihu/zhihu.png'),
    asset('/src/assets/project/zhihu/zhihu2.png'),
    asset('/src/assets/project/zhihu/zhihu3.png'),
    asset('/src/assets/project/zhihu/zhihu4.png'),
    asset('/src/assets/project/zhihu/zhihu5.png'),
    asset('/src/assets/project/zhihu/zhihu6.png'),
    asset('/src/assets/project/zhihu/zhihu7.png'),
    asset('/src/assets/project/zhihu/zhihu8.png'),
    asset('/src/assets/project/zhihu/zhihu9.png'),
    asset('/src/assets/project/zhihu/zhihu10.png'),
    asset('/src/assets/project/zhihu/zhihu11.png'),
    asset('/src/assets/project/zhihu/zhihu12.png'),
    asset('/src/assets/project/zhihu/zhihu13.png'),
    asset('/src/assets/project/zhihu/zhihu14.png'),
    asset('/src/assets/project/zhihu/zhihu15.png'),
    asset('/src/assets/project/zhihu/zhihu16.png'),
    asset('/src/assets/project/zhihu/zhihu17.png'),
    asset('/src/assets/project/zhihu/zhihu18.png'),
    asset('/src/assets/project/zhihu/zhihu19.png'),
    asset('/src/assets/project/zhihu/zhihu20.png'),
    asset('/src/assets/project/zhihu/zhihu21.png'),
    asset('/src/assets/project/zhihu/zhihu22.png'),
    asset('/src/assets/project/zhihu/zhihu23.png'),
    asset('/src/assets/project/zhihu/zhihu24.png'),
    asset('/src/assets/project/zhihu/zhihu25.png'),
    asset('/src/assets/project/zhihu/zhihu26.png'),
    asset('/src/assets/project/zhihu/zhihu27.png'),
    asset('/src/assets/project/zhihu/zhihu28.png')
    ]

const scard4 ='/home/project/ZHIHU'


export { scard1 } //名称
export { scard2 } //卡片背景
export { scard3 } //内容
export { scard4 } //页面地址
