import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/project/SchwarzkopfAnalyzerEn/SchwarzkopfAnalyzerEN'

const imageModules = import.meta.glob('/src/assets/project/SchwarzkopfAnalyzerEn/*.{png,jpg,jpeg,webp,gif,svg}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const SchwarzkopfAnalyzerEn = {
  id: 'SchwarzkopfAnalyzerEn',
  title: 'SchAnalyzer analyzer En',
  category: 'b2c',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/project/SchwarzkopfAnalyzerEn',
  images,
}
