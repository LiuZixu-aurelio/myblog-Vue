import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/project/AdhesivesShop/AdhesivesShop'

const imageModules = import.meta.glob('/src/assets/project/AdhesivesShop/*.{png,jpg,jpeg,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const AdhesivesShop = {
  id: 'AdhesivesShop',
  title: 'AdhesivesShop',
  category: 'b2c',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/project/AdhesivesShop',
  images,
}
