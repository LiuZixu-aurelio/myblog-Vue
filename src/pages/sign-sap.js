import { asset } from '../utils/asset.js'

export const signSAP = {
  id: 'sign-sap',
  title: 'SAP 作品',
  cover: {
    backgroundImage: `url(${asset('/src/assets/sign/sign-sap.png')})`,
  },
  path: '/home/sign/sign-sap',
  images: [
    asset('/src/assets/sign/sign-sap.png'),
    asset('/src/assets/sign/sign-sap1.png'),
    asset('/src/assets/sign/sign-sap2.png'),
  ],
}
