import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/lab/HairShpere/HairShpere'

const imageModules = import.meta.glob('/src/assets/lab/HairShpere/*.{png,jpg,jpeg,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const HairShpere = {
  id: 'HairShpere',
  title: 'HairShpere',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/lab/HairShpere',
  images,
}
