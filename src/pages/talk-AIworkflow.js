import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/talk/AIworkflow/talk-AIworkflow'

const imageModules = import.meta.glob('/src/assets/talk/AIworkflow/*.{png,jpg,jpeg,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const AIworkflow = {
  id: 'AIworkflow',
  title: 'AIworkflow',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/talk/AIworkflow',
  images,
}
