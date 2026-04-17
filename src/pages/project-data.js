import { asset } from '../utils/asset.js'
const data1 = '可视化大屏'
  


const aa = asset("/src/assets/project/data/data0.png")
const ab = 'url(' + aa +')'
const data2 = {backgroundImage: ab}


const data4 = '/home/project/data'

const data3  = 
    [
        asset('/src/assets/project/data/data.png'),
        asset('/src/assets/project/data/data1.png'),
        asset('/src/assets/project/data/data2.png'),
        asset('/src/assets/project/data/data3.png'),
        asset('/src/assets/project/data/data4.png'),
        asset('/src/assets/project/data/data5.png'),
        asset('/src/assets/project/data/datag.gif'),
    ]


export { data1 } // 标题
export { data2 } // 卡片背景
export { data3 } // 页面内容
export { data4 } // 路径
