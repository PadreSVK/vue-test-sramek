import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GraphView from '../views/GraphView.vue'
import TableView from '../views/TableView.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/GraphView',
    name: 'GraphView',
    component: GraphView
  },
  {
    path: '/TableView',
    name: 'TableView',
    component: TableView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
