import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/talk/AIHardware/talk-AIHardware'

const imageModules = import.meta.glob('/src/assets/talk/AIHardware/*.{png,jpg,jpeg,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const AIHardware = {
  id: 'AIHardware',
  title: 'AIHardware',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/talk/AIHardware',
  images,
}
