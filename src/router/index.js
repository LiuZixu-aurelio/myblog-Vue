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

const isInternalDetailPath = (path, type) =>
  typeof path === 'string' && path.startsWith(`/home/${type}/`) && path.split('/').pop()

const buildDetailRoutes = (items, type) =>
  items
    .filter((item) => isInternalDetailPath(item.path, type))
    .map((item) => createDetailRoute(type, item.path.split('/').pop(), item.title, item.images))

const projectDetailItems = projectDetails.filter((item) => item.path?.startsWith('/home/project/'))
const projectRoutes = buildDetailRoutes(projectDetailItems, 'project')
const talkRoutes = buildDetailRoutes(talkDetailRoutes, 'talk')
const labRoutes = buildDetailRoutes(labDetailRoutes, 'lab')
const signRoutes = buildDetailRoutes(signDetailRoutes, 'sign')

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
      ...projectRoutes,
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
