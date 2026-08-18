import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/project/eAcademy/eAcademy'

const imageModules = import.meta.glob('/src/assets/project/eAcademy/*.{png,jpg,jpeg,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const eAcademy = {
  id: 'eAcademy',
  title: 'eAcademy',
  category: 'b2c',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/project/eAcademy',
  images,
}
