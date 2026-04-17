import { createRouter, createWebHashHistory } from 'vue-router'

import DetailCom from '../components/detailCom.vue'
import { scard1, scard3 } from '../pages/zhihu.js'
import { scard1t, scard3t } from '../pages/talk-ux.js'
import { scardInfor1, scardInfor3 } from '../pages/infor.js'
import { extest1, extest3 } from '../pages/testhub.js'
import { button1, button3 } from '../pages/c-button'
import { signProduct1, signProduct3 } from '../pages/sign-product.js'
import { signBlender1, signBlender3 } from '../pages/sign-blender.js'
import { talkResponsive1, talkResponsive3 } from '../pages/talk-responsive.js'
import { signSAP1, signSAP3 } from '../pages/sign-sap.js'
import { signSalesforce1, signSalesforce3 } from '../pages/sign-salesforce.js'
import { pPlant1, pPlant3 } from '../pages/project-plant.js'
import { pConfig1, pConfig3 } from '../pages/project-config.js'
import { talkrule1, talkrule3 } from '../pages/talk-rule.js'
import { data1, data3 } from '../pages/project-data.js'
import { talkResearch1, talkResearch3 } from '../pages/talk-research.js'
import { talkShadow1, talkShadow3 } from '../pages/talk-shadow.js'
import { signMaterialdesign1, signMaterialdesign3 } from '../pages/sign-MaterialDesign.js'
import { pChristie1, pChristie3 } from '../pages/project-christie.js'
import { pOther1, pOther3 } from '../pages/project-other.js'

const HomeView = () => import('../views/HomeView.vue')
const whoView = () => import('../views/who.vue')
const PreView = () => import('../views/PreView.vue')
const ProjectView = () => import('../views/project.vue')
const TalkView = () => import('../views/talk.vue')
const SignView = () => import('../views/sign.vue')
const Testq = () => import('../views/test.vue')

const createDetailRoute = (type, path, name, img) => ({
  path: `/home/${type}/${path}`,
  name: `${type}-${path}`,
  props: { na: name, im: img },
  component: DetailCom,
})

const routes = [
  { path: '/', redirect: '/pre' },
  { path: '/pre', name: 'pre', component: PreView },
  { path: '/testq', name: 'testq', component: Testq },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      { path: 'who', name: 'homewho', component: whoView },
      { path: 'project', name: 'project', component: ProjectView },
      createDetailRoute('project', 'ZHIHU', scard1, scard3),
      createDetailRoute('project', 'test', extest1, extest3),
      createDetailRoute('project', 'infor', scardInfor1, scardInfor3),
      createDetailRoute('project', 'plantlight', pPlant1, pPlant3),
      createDetailRoute('project', 'configtool', pConfig1, pConfig3),
      createDetailRoute('project', 'data', data1, data3),
      createDetailRoute('project', 'christie', pChristie1, pChristie3),
      createDetailRoute('project', 'other', pOther1, pOther3),
      { path: 'talk', name: 'talk', component: TalkView },
      createDetailRoute('talk', 'DetailYHTYQT', scard1t, scard3t),
      createDetailRoute('talk', 'cbutton', button1, button3),
      createDetailRoute('talk', 'talk-responsive', talkResponsive1, talkResponsive3),
      createDetailRoute('talk', 'talk-rule', talkrule1, talkrule3),
      createDetailRoute('talk', 'research', talkResearch1, talkResearch3),
      createDetailRoute('talk', 'shadow', pOther1, pOther3),
      { path: 'sign', name: 'sign', component: SignView },
      createDetailRoute('sign', 'sign-sap', signSAP1, signSAP3),
      createDetailRoute('sign', 'sign-salesforce', signSalesforce1, signSalesforce3),
      createDetailRoute('sign', 'sign-product', signProduct1, signProduct3),
      createDetailRoute('sign', 'sign-blender', signBlender1, signBlender3),
      createDetailRoute('sign', 'sign-MaterialDesign', signMaterialdesign1, signMaterialdesign3),
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
