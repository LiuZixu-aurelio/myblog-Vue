import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import whoView from '../views/who.vue'
import PreView from '../views/PreView.vue'
import ProjectView from '../views/project.vue'
import TalkView from '../views/talk.vue'
import SignView from '../views/sign.vue'
import testQ from '../views/test.vue'
import DetailViewYHTYQT from '../pages/Detail.vue'
import DetailViewZH from '../pages/DetailZH.vue'
import DetailViewTest from '../pages/DetailTest.vue'

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
        component: DetailViewZH
      },
      {
        path: '/home/project/test',
        name: 'testhub',
        component: DetailViewTest,
      },
      {
        path: '/home/talk',
        name: 'talk',
        component: TalkView,
      },
      {
        path: '/home/talk/DetailYHTYQT',
        name: 'Detail',
        component: DetailViewYHTYQT
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
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
