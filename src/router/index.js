import { createRouter, createWebHashHistory } from 'vue-router'

import DetailCom from '../components/detailCom.vue'
import { projectDetails, talkDetailRoutes, labDetailRoutes, signDetailRoutes } from '../pages/works.js'

const HomeView = () => import('../views/HomeView.vue')
const whoView = () => import('../views/who.vue')
const PreView = () => import('../views/PreView.vue')
const ProjectView = () => import('../views/project.vue')
const TalkView = () => import('../views/talk.vue')
const LabView = () => import('../views/lab.vue')
const SignView = () => import('../views/sign.vue')
const Testq = () => import('../views/test.vue')

const createDetailRoute = (type, path, name, img) => ({
  path: `/home/${type}/${path}`,
  name: `${type}-${path}`,
  props: { na: name, im: img },
  component: DetailCom,
})

const projectDetailRoutes = projectDetails.map((item) =>
  createDetailRoute('project', item.path.split('/').pop(), item.title, item.images),
)

const talkRoutes = talkDetailRoutes.map((item) =>
  createDetailRoute('talk', item.path.split('/').pop(), item.title, item.images),
)

const labRoutes = labDetailRoutes.map((item) =>
  createDetailRoute('lab', item.path.split('/').pop(), item.title, item.images),
)

const signRoutes = signDetailRoutes.map((item) =>
  createDetailRoute('sign', item.path.split('/').pop(), item.title, item.images),
)

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
      ...projectDetailRoutes,
      { path: 'talk', name: 'talk', component: TalkView },
      ...talkRoutes,
      { path: 'lab', name: 'lab', component: LabView },
      ...labRoutes,
      { path: 'sign', name: 'sign', component: SignView },
      ...signRoutes,
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
