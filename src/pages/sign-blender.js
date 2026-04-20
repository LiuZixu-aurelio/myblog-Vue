import { asset } from '../utils/asset.js'

export const signBlender = {
  id: 'sign-blender',
  title: 'Blender 相关作品',
  cover: {
    backgroundImage: `url(${asset('/src/assets/sign/sign-blender.png')})`,
  },
  path: '/home/sign/sign-blender',
  images: [
    asset('/src/assets/sign/sign-blender.png'),
    asset('/src/assets/sign/sign-blender1.png'),
    asset('/src/assets/sign/sign-blender2.png'),
  ],
}
