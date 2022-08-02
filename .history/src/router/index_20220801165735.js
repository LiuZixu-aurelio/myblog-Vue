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
import { Button1, Button3 } from '../pages/c-button'


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
        path: '/home/talk/c',
        name: 'c-button',
        props: { na:Button1,im:Button3 },
        component: DetailCom
      },
      {
        path: '/home/sign',
        name: 'sign',
        component: SignView
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
