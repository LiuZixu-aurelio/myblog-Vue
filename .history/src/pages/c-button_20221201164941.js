const button1 = '组件-按钮的剖析'

const aa = require("/src/assets/project/button0.png")
const ab = 'url(' + aa +')'
const button2 = {backgroundImage: ab}

const button4 = '/home/talk/cbutton'

const button3 = [
    require('/src/assets/project/button.png'),
    require('/src/assets/project/button1.png'),
    require('/src/assets/project/button2.png'),
    require('/src/assets/project/button3.png'),
    require('/src/assets/project/button4.png'),
    require('/src/assets/project/button5.png'),
    require('/src/assets/project/button6.png'),
    require('/src/assets/project/button7.png'),
    require('/src/assets/project/button8.png')
]


export { button1 } // 标题
export { button2 } // 卡片背景
export { button3 } // 页面内容
export { button4 } // 路径
