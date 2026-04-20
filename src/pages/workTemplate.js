import { asset } from '../utils/asset.js'

export const createWorkPage = ({ title, cover, path, images }) => ({
  title,
  cover: {
    backgroundImage: `url(${asset(cover)})`,
  },
  path,
  images: images.map((image) => asset(image)),
})
