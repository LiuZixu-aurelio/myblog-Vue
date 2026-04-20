import { asset } from '../utils/asset.js'

export const projectOther = {
  id: 'other',
  title: '其他作品',
  cover: {
    backgroundImage: `url(${asset('/src/assets/project/other/other0.png')})`,
  },
  path: '/home/project/other',
  images: [
    asset('/src/assets/project/other/other.png'),
    asset('/src/assets/project/other/other01.png'),
    asset('/src/assets/project/other/other02.png'),
    asset('/src/assets/project/other/other03.png'),
    asset('/src/assets/project/other/other04.png'),
    asset('/src/assets/project/other/other05.png'),
  ],
}
