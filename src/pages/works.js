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


const registry = {}

const registerWork = (id, group, { title, cover, path, images }) => {
  registry[id] = {
    id,
    group,
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

registerGroup('project', [
  SchAnalyzer,
  glooly,
  zhihu,
  ABCwebsite,
  shiseidoAnalyzer,
  pChristie,
  data,
  testhub,
  infor,
  pPlant,
  pConfig,
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
  labauduino,
  labbazi
])

export const works = Object.values(registry)
export const projectCards = works.filter((item) => item.group === 'project')
export const projectDetails = projectCards
export const talkDetailRoutes = works.filter((item) => item.group === 'talk')
export const labDetailRoutes = works.filter((item) => item.group === 'lab')
export const signDetailRoutes = works.filter((item) => item.group === 'sign')
