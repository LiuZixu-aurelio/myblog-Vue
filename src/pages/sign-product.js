import { asset } from '../utils/asset.js'

export const signProduct = {
  id: 'sign-product',
  title: '笔记-产品书籍&讲座',
  cover: {
    backgroundImage: `url(${asset('/src/assets/sign/sign-product.png')})`,
  },
  path: '/home/sign/sign-product',
  images: [
    asset('/src/assets/sign/sign-product.png'),
    asset('/src/assets/sign/sign-product1.png'),
    asset('/src/assets/sign/sign-product2.png'),
    asset('/src/assets/sign/sign-product3.png'),
  ],
}
