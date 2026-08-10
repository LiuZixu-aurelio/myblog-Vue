import { zhihu } from './zhihu.js'
import { testhub } from './testhub.js'
import { infor } from './infor.js'
import { pPlant } from './project-plant.js'
import { pConfig } from './project-config.js'
import { data } from './project-data.js'
import { pChristie } from './project-christie.js'
import { talkUx } from './talk-ux.js'
import { cButton } from './c-button.js'
import { signProduct } from './sign-product.js'
import { signBlender } from './sign-blender.js'
import { talkResponsive } from './talk-responsive.js'
import { signSAP } from './sign-sap.js'
import { signSalesforce } from './sign-salesforce.js'
import { talkRule } from './talk-rule.js'
import { talkResearch } from './talk-research.js'
import { talkShadow } from './talk-shadow.js'
import { signMaterialdesign } from './sign-MaterialDesign.js'
import { labdog } from './lab-dog.js'
import { labauduino } from './lab-auduino.js'   
import { labbazi } from './lab-bazi.js'
import { SchAnalyzer } from './project-SchAnalyzer.js'
import { glooly } from './project-glooly.js'
import { shiseidoAnalyzer } from './project-shiseidoAnalyzer.js'
import { AIAgentExpeience } from './talk-AIAgentExpeience.js'
import { AIworkflow } from './talk-AIworkflow.js'
import { AINativeProduct } from './talk-AINativeProduct.js'
import { AIHardware } from './talk-AIHardware.js'
import { AIbusiness } from './talk-AIbusiness.js'
import { ABCwebsite } from './project-ABCwebsite.js'
import { chatbot } from './lab-chatbot.js'
import { HairShpere } from './lab-HairShpere.js'
import { ChameleonAnInteractiveDigital } from './lab-ChameleonAnInteractiveDigital.js'
import { ciot } from './project-ciot.js'
import { PPPdashboard } from './project-PPPdashboard.js'
import { AdhesivesShop } from './project-AdhesivesShop.js'
import { lito } from './lab-lito.js'

const registry = {}

const registerWork = (id, group, { title, cover, path, images, category = 'b2b' }) => {
  registry[id] = {
    id,
    group,
    category,
    title,
    cover,
    path: path ?? `/home/${group}/${id}`,
    images,
  }
}

const registerGroup = (group, items) => {
  items.forEach((item) => {
    if (!item || !item.id) return
    registerWork(item.id, group, item)
  })
}

// category: 'b2b' | 'b2c' — 业务场景，用于作品列表筛选
registerGroup('project', [
  { ...SchAnalyzer, category: 'b2c' },
  { ...glooly, category: 'b2c' },
  { ...ciot, category: 'b2b' },
  { ...AdhesivesShop, category: 'b2c' },
  { ...ABCwebsite, category: 'b2c' },
  { ...PPPdashboard, category: 'b2b' },
  { ...shiseidoAnalyzer, category: 'b2c' },
  { ...zhihu, category: 'b2c' },
  { ...pChristie, category: 'b2c' },
  { ...infor, category: 'b2b' },
  { ...data, category: 'b2b' },
  { ...testhub, category: 'b2b' },
  { ...pPlant, category: 'b2c' },
  { ...pConfig, category: 'b2b' },
])

registerGroup('talk', [
  AIAgentExpeience,
  AIworkflow,
  AINativeProduct,
  AIHardware,
  AIbusiness,
  talkUx,
  cButton,
  talkResponsive,
  talkRule,
  talkResearch,
  talkShadow,
])

registerGroup('sign', [
  signSAP,
  signSalesforce,
  signProduct,
  signBlender,
  signMaterialdesign,
])

registerGroup('lab', [
  labdog,
  lito,
  HairShpere,
  ChameleonAnInteractiveDigital,
  labauduino,
  chatbot,
  labbazi,
  
  
])

export const works = Object.values(registry)
export const projectCards = works.filter((item) => item.group === 'project')
export const projectCategories = [
  { label: '全部', value: 'all' },
  { label: 'B2B企业产品', value: 'b2b' },
  { label: 'B2C消费产品', value: 'b2c' },
]
export const projectDetails = projectCards
export const talkDetailRoutes = works.filter((item) => item.group === 'talk')
export const labDetailRoutes = works.filter((item) => item.group === 'lab')
export const signDetailRoutes = works.filter((item) => item.group === 'sign')
