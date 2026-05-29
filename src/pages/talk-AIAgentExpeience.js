import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/talk/AIAgentExpeience/talk-AIAgentExpeience'

const imageModules = import.meta.glob('/src/assets/talk/AIAgentExpeience/*.{png,jpg,jpeg,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const AIAgentExpeience = {
  id: 'AIAgentExpeience',
  title: 'AIAgentExpeience',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/talk/AIAgentExpeience',
  images,
}
