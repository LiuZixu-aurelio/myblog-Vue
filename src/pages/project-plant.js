import { asset } from '../utils/asset.js'
const pPlant1 = '植物灯控制器'
  
const aa = asset("/src/assets/project/plantlight/plantlight0.png")
const ab = 'url(' + aa +')'
const pPlant2 = {backgroundImage: ab}

const pPlant4 = '/home/project/plantlight'

const pPlant3 = 
[
    asset('/src/assets/project/plantlight/plantlight.png'),
    asset('/src/assets/project/plantlight/plantlight1.png'),
    asset('/src/assets/project/plantlight/plantlight2.png'),
]

export { pPlant1 }
export { pPlant2  }
export { pPlant3  }
export { pPlant4 }

