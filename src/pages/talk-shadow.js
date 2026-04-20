import { asset } from '../utils/asset.js'

export const talkShadow = {
  id: 'shadow',
  title: '阴影规范',
  cover: {
    backgroundImage: `url(${asset('/src/assets/talk/shadow/talk-shadow0.png')})`,
  },
  path: '/home/talk/shadow',
  images: [
    asset('/src/assets/talk/shadow/talk-shadow.png'),
    asset('/src/assets/talk/shadow/talk-shadow1.png'),
    asset('/src/assets/talk/shadow/talk-shadow2.png'),
  ],
}
