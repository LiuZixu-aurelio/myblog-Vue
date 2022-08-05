const signSAP1 = '笔记-SAP设计系统'

const aa = require("/src/assets/sign/sign-sap.png")
const ab = 'url(' + aa +')'
const signSAP2 = {backgroundImage: ab}

const signSAP4 = '/home/sign/sign-sap'

const signSAP3 =[
    require('/src/assets/sign/sign-sap.png'),
    require('/src/assets/sign/sign-sap1.png'),
    require('/src/assets/sign/sign-sap2.png'),
    require('/src/assets/sign/sign-sap3.png'),
    require('/src/assets/sign/sign-sap4.png'),
    require('/src/assets/sign/sign-sap5.png'),
    require('/src/assets/sign/sign-sap6.png')
]

export { signSAP1 } // 标题
export { signSAP2 } // 卡片背景
export { signSAP3 } // 页面内容
export { signSAP4 } // 路径


