const extest1 = 'B端 - 0到1的测试平台'
  
const aa = require("/src/assets/project/test.png")
const ab = 'url(' + aa +')'
const extest2 = {backgroundImage: ab}

const extest4 = '/home/project/test'

const a = require('/src/assets/project/test.png')
const a1 = require('/src/assets/project/test1.png')
const a2 = require('/src/assets/project/test2.png')
const a3 = require('/src/assets/project/test3.png')
const a4 = require('/src/assets/project/test4.png')
const a5 = require('/src/assets/project/test5.png')
const a6 = require('/src/assets/project/test6.png')
const extest3 = [a,a1,a2,a3,a4,a5,a6]

export { extest1 }
export { extest2  }
export { extest3  }
export { extest4 }

