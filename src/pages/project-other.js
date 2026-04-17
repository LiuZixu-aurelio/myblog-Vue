import { asset } from '../utils/asset.js'
const pOther1 = '其他作品'
  
const aa = asset("/src/assets/project/other/other0.png")
const ab = 'url(' + aa +')'
const pOther2 = {backgroundImage: ab}

const pOther4 = '/home/project/other'

const pOther3 = 
[
    asset('/src/assets/project/other/other.png'),
    asset('/src/assets/project/other/other01.png'),
    asset('/src/assets/project/other/other02.png'),
    asset('/src/assets/project/other/other03.png'),
    asset('/src/assets/project/other/other04.png'),
    asset('/src/assets/project/other/other05.png'),
]

export { pOther1 }
export { pOther2  }
export { pOther3  }
export { pOther4 }

