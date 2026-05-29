import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/talk/AIbusiness/talk-AIbusiness'

const imageModules = import.meta.glob('/src/assets/talk/AIbusiness/*.{png,jpg,jpeg,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const AIbusiness = {
  id: 'AIbusiness',
  title: 'AIbusiness',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/talk/AIbusiness',
  images,
}
