import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './Views/Dashboard.vue'
import Projects from './Views/Projects.vue'
import Team from './Views/Team.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
        },
        {
            path: '/project',
            name: 'project',
            component: Projects,
        },
        {
            path: '/team',
            name: 'team',
            component: Team,
        },
    ],
})
