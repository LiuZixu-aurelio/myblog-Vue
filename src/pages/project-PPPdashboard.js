import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/project/PPPdashboard/PPPdashboard'

const imageModules = import.meta.glob('/src/assets/project/PPPdashboard/*.{png,jpg,jpeg,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const PPPdashboard = {
  id: 'PPPdashboard',
  title: 'PPPdashboard',
  category: 'b2b',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/project/PPPdashboard',
  images,
}
