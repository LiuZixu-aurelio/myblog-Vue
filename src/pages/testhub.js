const extest1 = 'B端 - 0到1的测试平台'
  
const aa = require("/src/assets/test.png")
const ab = 'url(' + aa +')'
const extest2 = {backgroundImage: ab}

const extest4 = '/home/project/test'

const a = require('/src/assets/test.png')
const a1 = require('/src/assets/test1.png')
const a2 = require('/src/assets/test2.png')
const a3 = require('/src/assets/test3.png')
const a4 = require('/src/assets/test4.png')
const a5 = require('/src/assets/test5.png')
const a6 = require('/src/assets/test6.png')
const extest3 = [a,a1,a2,a3,a4,a5,a6]

export { extest1 }
export { extest2  }
export { extest3  }
export { extest4 }

