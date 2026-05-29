import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/talk/AINativeProduct/talk-AINativeProduct'

const imageModules = import.meta.glob('/src/assets/talk/AINativeProduct/*.{png,jpg,jpeg,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const AINativeProduct = {
  id: 'AINativeProduct',
  title: 'AINativeProduct',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/talk/AINativeProduct',
  images,
}
