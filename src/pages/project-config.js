import { asset } from '../utils/asset.js'
const pConfig1 = '配置工具'
  
const aa = asset("/src/assets/project/config/config0.png")
const ab = 'url(' + aa +')'
const pConfig2 = {backgroundImage: ab}

const pConfig4 = '/home/project/configtool'

const pConfig3 = 
[
    asset('/src/assets/project/config/config.png'),
    asset('/src/assets/project/config/config1.png'),
    asset('/src/assets/project/config/config2.png'),
    asset('/src/assets/project/config/config3.png'),
    asset('/src/assets/project/config/config4.png')
]

export { pConfig1 }
export { pConfig2  }
export { pConfig3  }
export { pConfig4 }

