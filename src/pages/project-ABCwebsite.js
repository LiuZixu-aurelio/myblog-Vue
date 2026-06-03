import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/project/ABCwebsite/ABCwebsite'

const imageModules = import.meta.glob('/src/assets/project/ABCwebsite/*.{png,jpg,jpeg,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const ABCwebsite = {
  id: 'ABCwebsite',
  title: 'ABCwebsite',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/project/ABCwebsite',
  images,
}
