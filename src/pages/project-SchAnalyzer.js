import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/project/SchwarzkopfAnalyzer/SchwarzkopfAnalyzer'

const imageModules = import.meta.glob('/src/assets/project/SchwarzkopfAnalyzer/*.{png,jpg,jpeg,webp,gif,svg}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const SchAnalyzer = {
  id: 'SchAnalyzer',
  title: '施华蔻头皮检测仪',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.jpg`)})`,
  },
  path: '/home/project/SchwarzkopfAnalyzer',
  images,
}
