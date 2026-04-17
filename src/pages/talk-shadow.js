import { asset } from '../utils/asset.js'
const talkShadow1 = '阴影'
  


const aa = asset("/src/assets/talk/shadow/talk-shadow0.png")
const ab = 'url(' + aa +')'
const talkShadow2 = {backgroundImage: ab}


const talkShadow4 = '/home/talk/shadow'

const talkShadow3 = 
[
    asset('/src/assets/talk/shadow/talk-shadow.png'),
    asset('/src/assets/talk/shadow/talk-shadow1.png'),
    asset('/src/assets/talk/shadow/talk-shadow2.png'),
    asset('/src/assets/talk/shadow/talk-shadow3.png'),
    ]

export { talkShadow1 }
export { talkShadow2 }
export { talkShadow3 }
export { talkShadow4 }
