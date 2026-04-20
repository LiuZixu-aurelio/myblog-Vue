import { asset } from '../utils/asset.js'

export const signSalesforce = {
  id: 'sign-salesforce',
  title: 'Salesforce 作品',
  cover: {
    backgroundImage: `url(${asset('/src/assets/sign/sign-salesforce.png')})`,
  },
  path: '/home/sign/sign-salesforce',
  images: [
    asset('/src/assets/sign/sign-salesforce.png'),
    asset('/src/assets/sign/sign-salesforce1.png'),
    asset('/src/assets/sign/sign-salesforce2.png'),
  ],
}
