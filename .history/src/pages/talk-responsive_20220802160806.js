// 1.设置本页
// 2.配置路由
// 3.放入列表页

const signBlender1 = '组件-布局响应式'

const aa = require("/src/assets/talk/talk-responsive.png")
const signBlender2 = {backgroundImage: 'url(' + aa +')'}

const signBlender3 =[
    require('/src/assets/sign/talk-responsive.png'),
    require('/src/assets/sign/talk-responsive1.png'),
    require('/src/assets/sign/talk-responsive2.png'),
    require('/src/assets/sign/talk-responsive3.png'),
    require('/src/assets/sign/talk-responsive4.png')
]

const signBlender4 = '/home/talk/talk-responsive'

export { signBlender1 } // 标题
export { signBlender2 } // 卡片背景
export { signBlender3 } // 页面内容
export { signBlender4 } // 路径
