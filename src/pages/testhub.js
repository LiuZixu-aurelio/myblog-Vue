import { asset } from '../utils/asset.js'
const extest1 = 'B端 - 0到1的测试平台'
  
const aa = asset("/src/assets/project/test/test0.png")
const ab = 'url(' + aa +')'
const extest2 = {backgroundImage: ab}

const extest4 = '/home/project/test'

const extest3 = 
[
    asset('/src/assets/project/test/test.png'),
    asset('/src/assets/project/test/test01.png'),
    asset('/src/assets/project/test/test02.png'),
    asset('/src/assets/project/test/test03.png'),
    asset('/src/assets/project/test/test04.png'),
    asset('/src/assets/project/test/test05.png'),
    asset('/src/assets/project/test/test06.png'),
    asset('/src/assets/project/test/test07.png'),
    asset('/src/assets/project/test/test08.png'),
    asset('/src/assets/project/test/test09.png'),
    asset('/src/assets/project/test/test10.png'),
    asset('/src/assets/project/test/test11.png'),
    asset('/src/assets/project/test/test12.png'),
    asset('/src/assets/project/test/test13.png'),
    asset('/src/assets/project/test/test14.png'),
    asset('/src/assets/project/test/test15.png'),
    asset('/src/assets/project/test/test16.png'),
]

export { extest1 }
export { extest2  }
export { extest3  }
export { extest4 }

