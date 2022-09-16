const pConfig1 = '配置工具'
  
const aa = require("/src/assets/project/config.png")
const ab = 'url(' + aa +')'
const pConfig2 = {backgroundImage: ab}

const pConfig4 = '/home/project/configtool'

const pConfig3 = 
[
    require('/src/assets/project/config.png'),
    require('/src/assets/project/config1.png'),
    require('/src/assets/project/config2.png'),
    require('/src/assets/project/config3.png')
]

export { pConfig1 }
export { pConfig2  }
export { pConfig3  }
export { pConfig4 }

