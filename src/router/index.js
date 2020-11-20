import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GraphView from '../views/GraphView.vue'
import TableView from '../views/TableView.vue'
import About from '../views/About.vue'

const user = {
    name: "Fero",
    isAuthenticated: true
}

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/GraphView/:graphId?',
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
            component: About,
            meta: { requireAuth: true }
        },

    ],
})

router.beforeEach(
    (to, from, next) => {
        if (to.meta.requireAuth && !user.isAuthenticated) {
            next({ name: "Login" })
        }
        else {
            next()
        }
    }
)

export default router
