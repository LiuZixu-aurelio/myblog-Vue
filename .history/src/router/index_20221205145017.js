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
  constructor(name, img) {
    this.name = name;
    this.url = url;
  }
}
console.log(new luyou(m,u))



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
      {
        path: '/home/project/configtool',
        name: 'configtool',
        props: { na:pConfig1,im:pConfig3 },
        component: DetailCom,
      },
      {
        path: '/home/project/data',
        name: 'configtool',
        props: { na:data1,im:data3 },
        component: DetailCom,
      },
      {
        path: '/home/talk',
        name: 'talk',
        component: TalkView,
      },
      {
        path: '/home/talk/DetailYHTYQT',
        name: 'Detail',
        props: { na:scard1t,im:scard3t },
        component: DetailCom
      },
      {
        path: '/home/talk/cbutton',
        name: 'cbutton',
        props: { na:button1,im:button3 },
        component: DetailCom
      },
      {
        path: '/home/talk/talk-responsive',
        name: 'talk-responsive',
        props: { na:talkResponsive1,im:talkResponsive3 },
        component: DetailCom
      },
      {
        path: '/home/talk/talk-rule',
        name: 'talk-rule',
        props: { na:talkrule1,im:talkrule3 },
        component: DetailCom
      },
      {
        path: '/home/sign',
        name: 'sign',
        component: SignView
      },
      {
        path: '/home/sign/sign-sap',
        name: 'sign-sap',
        props: { na:signSAP1,im:signSAP3 },
        component: DetailCom
      },
      {
        path: '/home/sign/sign-salesforce',
        name: 'sign-salesforce',
        props: { na:signSalesforce1,im:signSalesforce3 },
        component: DetailCom
      },
      {
        path: '/home/sign/sign-product',
        name: 'sign-product',
        props: { na:signProduct1,im:signProduct3 },
        component: DetailCom
      },
      {
        path: '/home/sign/sign-blender',
        name: 'sign-blender',
        props: { na:signBlender1,im:signBlender3 },
        component: DetailCom
      }
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
