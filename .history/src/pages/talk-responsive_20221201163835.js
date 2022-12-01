// 1.设置本页
// 2.配置路由
// 3.放入列表页

const talkResponsive1 = '组件-布局响应式'

const aa = require("/src/assets/talk/talk-responsive0.png")
const talkResponsive2 = {backgroundImage: 'url(' + aa +')'}

const talkResponsive3 =[
    require('/src/assets/talk/talk-responsive.png'),
    require('/src/assets/talk/talk-responsive1.png'),
    require('/src/assets/talk/talk-responsive2.png'),
    require('/src/assets/talk/talk-responsive3.png'),
    require('/src/assets/talk/talk-responsive4.png')
]

const talkResponsive4 = '/home/talk/talk-responsive'

export { talkResponsive1 } // 标题
export { talkResponsive2 } // 卡片背景
export { talkResponsive3 } // 页面内容
export { talkResponsive4 } // 路径
