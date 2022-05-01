import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import whoView from '../views/who.vue'
import PreView from '../views/PreView.vue'
import ProjectView from '../views/project.vue'
import TalkView from '../views/talk.vue'
import SignView from '../views/sign.vue'
import testQ from '../views/test.vue'
import DetailView from '../views/Detail.vue'

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
        component: ProjectView
      },
      {
        path: '/home/talk',
        name: 'talk',
        component: TalkView
      },
      {
        path: '/home/sign',
        name: 'sign',
        component: SignView
      },
      {
        path: '/home/:id',
        name: 'Detail',
        component: DetailView
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
