const data1 = '可视化大屏'
  


const aa = require("/src/assets/project/data0.png")
const ab = 'url(' + aa +')'
const data2 = {backgroundImage: ab}


const data4 = '/home/project/data'

const data3  = 
    [
        require('/src/assets/project/data.png'),
        require('/src/assets/project/datag.gif'),
        require('/src/assets/project/data1.png'),
        require('/src/assets/project/data2.png'),
        require('/src/assets/project/data3.png')
    ]


export { data1 } // 标题
export { data2 } // 卡片背景
export { data3 } // 页面内容
export { data4 } // 路径
