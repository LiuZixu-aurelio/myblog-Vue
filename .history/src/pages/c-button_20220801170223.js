const Button1 = '组件-按钮的剖析'
  


const aa = require("/src/assets/button.png")
const ab = 'url(' + aa +')'
const Button2 = {backgroundImage: ab}


const Button4 = '/home/talk/cbutton'

const a0 = require('/src/assets/button.png')
const a = require('/src/assets/button1.png')
const a1 = require('/src/assets/button2.png')
const a2 = require('/src/assets/button3.png')
const a3 = require('/src/assets/button4.png')
const a4 = require('/src/assets/button5.png')
const a5 = require('/src/assets/button6.png')
const Button3 = [a0,a,a1,a2,a3,a4,a5]

export { Button1 } // 标题
export { Button2 } // 卡片背景
export { Button3 } // 页面内容
export { Button4 } // 路径
