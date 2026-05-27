import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/project/glooly/glooly'

const imageModules = import.meta.glob('/src/assets/project/glooly/*.{png,jpg,jpeg,webp,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const glooly = {
  id: 'glooly',
  title: 'glooly',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/project/glooly',
  images,
}
