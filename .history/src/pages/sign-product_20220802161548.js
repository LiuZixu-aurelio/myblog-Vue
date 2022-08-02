const signProduct1 = '笔记-产品书籍&讲座'

const aa = require("/src/assets/sign/sign-product.png")
const ab = 'url(' + aa +')'
const signProduct2 = {backgroundImage: ab}

const signProduct4 = '/home/sign/sign-product'

const a0 = require('/src/assets/sign/sign-product.png')
const a = require('/src/assets/sign/sign-product1.png')
const a1 = require('/src/assets/sign/sign-product2.png')
const a2 = require('/src/assets/sign/sign-product3.png')
const signProduct3 = [a0,a,a1,a2]

export { signProduct1 } // 标题
export { signProduct2 } // 卡片背景
export { signProduct3 } // 页面内容
export { signProduct4 } // 路径

