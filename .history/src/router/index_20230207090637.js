import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import whoView from '../views/who.vue'
import PreView from '../views/PreView.vue'
import ProjectView from '../views/project.vue'
import TalkView from '../views/talk.vue'
import SignView from '../views/sign.vue'
import Test from '../views/test.vue'

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







class luyou {
  constructor(type,path,name,img) {
    this.path = "/home/" + type + "/" + path
    this.name = path;
    this.props = {na: name, im: img}
    this.url = img;
    this.component = DetailCom
  }
}

const routes = [
  {
    path: '/', redirect: '/pre'
  },
  {
    path: '/pre',
    name: 'pre',
    component: PreView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/home/who',
        name: 'homewho',
        component: whoView
      },
      {
        path: '/home/test',
        name: 'test',
        component: whoView
      },
      {
        path: '/home/project',
        name: 'project',
        component: ProjectView,
      },
      new luyou("project","ZHIHU",scard1,scard3),
      new luyou("project","test",extest1,extest3),
      new luyou("project","infor",scardInfor1,scardInfor3),
      new luyou("project","plantlight",pPlant1,pPlant3),
      new luyou("project","configtool",pConfig1,pConfig3),
      new luyou("project","data",data1,data3),
      new luyou("project","christie",pChristie1,pChristie3),


      {
        path: '/home/talk',
        name: 'talk',
        component: TalkView,
      },
      new luyou("talk","DetailYHTYQT",scard1t,scard3t),
      new luyou("talk","cbutton",button1,button3),
      new luyou("talk","talk-responsive",talkResponsive1,talkResponsive3),
      new luyou("talk","talk-rule",talkrule1,talkrule3),
      new luyou("talk","research",talkResearch1,talkResearch3),
      new luyou("talk","shadow",talkShadow1,talkShadow3),
      
      {
        path: '/home/sign',
        name: 'sign',
        component: SignView
      },
      new luyou("sign","sign-sap",signSAP1,signSAP3),
      new luyou("sign","sign-salesforce",signSalesforce1,signSalesforce3),
      new luyou("sign","sign-product",signProduct1,signProduct3),
      new luyou("sign","sign-blender",signBlender1,signBlender3),
      new luyou("sign","sign-MaterialDesign",signMaterialdesign1,signMaterialdesign3)
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
