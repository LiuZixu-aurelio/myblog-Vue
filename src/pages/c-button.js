import { asset } from '../utils/asset.js'
const button1 = '组件-按钮的剖析'

const aa = asset("/src/assets/talk/button/button0.png")
const ab = 'url(' + aa +')'
const button2 = {backgroundImage: ab}

const button4 = '/home/talk/cbutton'

const button3 = [
    asset('/src/assets/talk/button/button.png'),
    asset('/src/assets/talk/button/button1.png'),
    asset('/src/assets/talk/button/button2.png'),
    asset('/src/assets/talk/button/button3.png'),
    asset('/src/assets/talk/button/button4.png'),
    asset('/src/assets/talk/button/button5.png'),
    asset('/src/assets/talk/button/button6.png'),
    asset('/src/assets/talk/button/button7.png'),
    asset('/src/assets/talk/button/button8.png')
]


export { button1 } // 标题
export { button2 } // 卡片背景
export { button3 } // 页面内容
export { button4 } // 路径
