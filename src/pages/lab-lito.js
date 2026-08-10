import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/lab/lito/lito'

const imageModules = import.meta.glob('/src/assets/lab/lito/*.{png,jpg,jpeg,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const lito = {
  id: 'lito',
  title: 'lito',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/lab/lito',
  images,
}
