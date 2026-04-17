import { asset } from '../utils/asset.js'
// 1.设置本页
// 2.配置路由
// 3.放入列表页

const signBlender1 = '笔记-blender'

const aa = asset("/src/assets/sign/sign-blender.png")
const signBlender2 = {backgroundImage: 'url(' + aa +')'}

const signBlender3 =[
    asset('/src/assets/sign/sign-blender.png'),
    asset('/src/assets/sign/sign-blender1.png'),
    asset('/src/assets/sign/sign-blender2.png'),
    asset('/src/assets/sign/sign-blender3.png'),
    asset('/src/assets/sign/sign-blender4.png'),
    asset('/src/assets/sign/sign-blender5.png')
]

const signBlender4 = '/home/sign/sign-blender'

export { signBlender1 } // 标题
export { signBlender2 } // 卡片背景
export { signBlender3 } // 页面内容
export { signBlender4 } // 路径

