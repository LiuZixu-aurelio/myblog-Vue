const signProduct1 = '笔记-产品书籍&讲座'

const aa = require("/src/assets/sign/sign-product.png")
const ab = 'url(' + aa +')'
const signProduct2 = {backgroundImage: ab}

const signProduct4 = '/home/sign/sign-product'

const signProduct3 = [
    require('/src/assets/sign/sign-product.png'),
    require('/src/assets/sign/sign-product1.png'),
    require('/src/assets/sign/sign-product2.png'),
    require('/src/assets/sign/sign-product3.png')
]

export { signProduct1 } // 标题
export { signProduct2 } // 卡片背景
export { signProduct3 } // 页面内容
export { signProduct4 } // 路径


