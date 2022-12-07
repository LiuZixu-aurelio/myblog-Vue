import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import whoView from '../views/who.vue'
import PreView from '../views/PreView.vue'
import ProjectView from '../views/project.vue'
import TalkView from '../views/talk.vue'
import SignView from '../views/sign.vue'
import testQ from '../views/test.vue'

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



class luyou {
  constructor(type,path,name,img) {
    this.path = "/home/" + type + "/" + path
    this.name = path;
    this.props = {na: name, im: img}
    this.url = img;
    this.component = DetailCom
  }
}

console.log(new luyou("project","data",data1,data3))



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
        path: '/home/project',
        name: 'project',
        component: ProjectView,
      },
      {
        path: '/home/project/ZHIHU',
        name: 'ZHIHU',
        props: { na:scard1,im:scard3 },
        component: DetailCom
      },
      {
        path: '/home/project/test',
        name: 'testhub',
        props: { na:extest1,im:extest3 },
        component: DetailCom,
      },
      {
        path: '/home/project/infor',
        name: 'infor',
        props: { na:scardInfor1,im:scardInfor3 },
        component: DetailCom,
      },
      {
        path: '/home/project/plantlight',
        name: 'plantlight',
        props: { na:pPlant1,im:pPlant3 },
        component: DetailCom,
      },
      new luyou("project","configtool",pConfig1,pConfig3),
      new luyou("project","data",data1,data3),
      {
        path: '/home/talk',
        name: 'talk',
        component: TalkView,
      },
      new luyou("talk","DetailYHTYQT",scard1t,scard3t),
      new luyou("talk","cbutton",button1,button3),
      new luyou("talk","talk-responsive",talkResponsive1,talkResponsive3),
      new luyou("talk","talk-rule",talkrule1,talkrule3),
      {
        path: '/home/sign',
        name: 'sign',
        component: SignView
      },
      new luyou("sign","sign-sap",signSAP1,signSAP3),
      new luyou("sign","sign-salesforce",signSalesforce1,signSalesforce3),
      new luyou("sign","sign-product",signProduct1,signProduct3),
      new luyou("sign","sign-blender",signBlender1,signBlender3)
    ]
  },

  {
    path: '/testQ',
    name: 'testQ',
    component: testQ
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
