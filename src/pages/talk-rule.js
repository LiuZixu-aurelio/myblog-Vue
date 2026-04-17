import { asset } from '../utils/asset.js'
const talkrule1 = '组件规则'
  


const aa = asset("/src/assets/talk/talk-rule0.png")
const ab = 'url(' + aa +')'
const talkrule2 = {backgroundImage: ab}


const talkrule4 = '/home/talk/talk-rule'

const talkrule3 = 
[
    asset('/src/assets/talk/talk-rule.png'),
    asset('/src/assets/talk/talk-rule1.png'),
    asset('/src/assets/talk/talk-rule2.png'),
    asset('/src/assets/talk/talk-rule3.png'),
    asset('/src/assets/talk/talk-rule4.png'),
    asset('/src/assets/talk/talk-rule5.png')
    ]

export { talkrule1 }
export { talkrule2 }
export { talkrule3 }
export { talkrule4 }
