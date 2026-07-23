import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/project/ciot/Ciot'

const imageModules = import.meta.glob('/src/assets/project/Ciot/*.{png,jpg,jpeg,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const ciot = {
  id: 'ciot',
  title: 'ciot',
  category: 'b2b',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/project/ciot',
  images,
}
