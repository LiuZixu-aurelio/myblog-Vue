// 1.设置本页
// 2.配置路由
// 3.放入列表页

const signSalesforce1 = '设计系统-salesforce'

const aa = require("/src/assets/sign/sign-salesforce.png")
const signSalesforce2 = {backgroundImage: 'url(' + aa +')'}

const signSalesforce3 =[
    require('/src/assets/sign/sign-salesforce.png'),
    require('/src/assets/sign/sign-salesforce1.png'),
    require('/src/assets/sign/sign-salesforce2.png'),
    require('/src/assets/sign/sign-salesforce3.png'),
    require('/src/assets/sign/sign-salesforce4.png'),
    require('/src/assets/sign/sign-salesforce5.png'),
    require('/src/assets/sign/sign-salesforce6.png'),
    require('/src/assets/sign/sign-salesforce7.png')
]

const signSalesforce4 = '/home/sign/sign-blender'

export { signSalesforce1 } // 标题
export { signSalesforce2 } // 卡片背景
export { signSalesforce3 } // 页面内容
export { signSalesforce4 } // 路径
