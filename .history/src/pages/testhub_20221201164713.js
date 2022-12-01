const extest1 = 'B端 - 0到1的测试平台'
  
const aa = require("/src/assets/project/test0.png")
const ab = 'url(' + aa +')'
const extest2 = {backgroundImage: ab}

const extest4 = '/home/project/test'

const extest3 = 
[
    require('/src/assets/project/test.png'),
    require('/src/assets/project/test1.png'),
    require('/src/assets/project/test2.png'),
    require('/src/assets/project/test3.png'),
    require('/src/assets/project/test4.png'),
    require('/src/assets/project/test5.png'),
    require('/src/assets/project/test6.png')
]

export { extest1 }
export { extest2  }
export { extest3  }
export { extest4 }

