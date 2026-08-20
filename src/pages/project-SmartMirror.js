import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/project/SmartMirror/SmartMirror'

const imageModules = import.meta.glob('/src/assets/project/SmartMirror/*.{png,jpg,jpeg,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const SmartMirror = {
  id: 'SmartMirror',
  title: 'SmartMirror',
  category: 'b2c',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/project/SmartMirror',
  images,
}
