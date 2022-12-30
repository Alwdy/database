import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import AchievementView from '../views/AchievementView.vue'
import TeamView from '../views/TeamView.vue'
import DatabaseView from '../views/DatabaseView.vue'
import NewsDetail from '../views/NewsDetail.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/views/NewsView',
    name: 'news',
    component: NewsView
  },
  {
    path: '/views/AchievementView',
    name: 'achievement',
    component: AchievementView
  },
  {
    path: '/views/TeamView',
    name: 'team',
    component: TeamView
  },
  {
    path: '/views/DatabaseView',
    name: 'database',
    component: DatabaseView
  },
  {
    path: '/views/NewsDetail',
    name: 'news detail',
    component: NewsDetail
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
