const button1 = '组件-按钮的剖析'

const aa = require("/src/assets/talk/button/button0.png")
const ab = 'url(' + aa +')'
const button2 = {backgroundImage: ab}

const button4 = '/home/talk/cbutton'

const button3 = [
    require('/src/assets/talk/button/button.png'),
    require('/src/assets/talk/button/button1.png'),
    require('/src/assets/talk/button/button2.png'),
    require('/src/assets/talk/button/button3.png'),
    require('/src/assets/talk/button/button4.png'),
    require('/src/assets/talk/button/button5.png'),
    require('/src/assets/talk/button/button6.png'),
    require('/src/assets/talk/button/button7.png'),
    require('/src/assets/talk/button/button8.png')
]


export { button1 } // 标题
export { button2 } // 卡片背景
export { button3 } // 页面内容
export { button4 } // 路径
