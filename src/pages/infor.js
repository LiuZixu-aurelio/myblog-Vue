import { asset } from '../utils/asset.js'

const imageBase = '/src/assets/project/infor/infor0'

const imageModules = import.meta.glob('/src/assets/project/infor/*.{png,jpg,jpeg,webp,gif,svg,webm,mp4,mov}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

export const infor = {
  id: 'infor',
  title: '数据看板',
  cover: {
    backgroundImage: `url(${asset(`${imageBase}.png`)})`,
  },
  path: '/home/project/infor',
  images,
}
