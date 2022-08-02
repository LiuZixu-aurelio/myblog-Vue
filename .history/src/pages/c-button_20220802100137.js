const button1 = '组件-按钮的剖析'
  


const aa = require("/src/assets/button.png")
const ab = 'url(' + aa +')'
const button2 = {backgroundImage: ab}


const button4 = '/home/talk/cbutton'

const a0 = require('/src/assets/button.png')
const a = require('/src/assets/button1.png')
const a1 = require('/src/assets/button2.png')
const a2 = require('/src/assets/button3.png')
const a3 = require('/src/assets/button4.png')
const a4 = require('/src/assets/button5.png')
const a5 = require('/src/assets/button6.png')
const a6 = require('/src/assets/button7.png')
const a7 = require('/src/assets/button8.png')
const button3 = [a0,a,a1,a2,a3,a4,a5,a6,a7]

export { button1 } // 标题
export { button2 } // 卡片背景
export { button3 } // 页面内容
export { button4 } // 路径
