import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/project/ShiseidoAnalyzer/ShiseidoAnalyzer'

const imageModules = import.meta.glob('/src/assets/project/ShiseidoAnalyzer/*.{png,jpg,jpeg,webp,webm,gif,svg,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const shiseidoAnalyzer = {
  id: 'shiseidoAnalyzer',
  title: 'shiseidoAnalyzer',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/project/shiseidoAnalyzer',
  images,
}
