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
        path: '/home/sign',
        name: 'sign',
        component: SignView
      },
      {
        path: '/home/sign/signproduct',
        name: 'sign-product',
        props: { na:signProduct1,im:signProduct3 },
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
