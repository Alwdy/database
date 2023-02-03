import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import AchievementView from '../views/AchievementView.vue'
import TeamView from '../views/TeamView.vue'
import DatabaseView from '../views/DatabaseView.vue'
import NewsDetail from '../views/NewsDetail.vue'
import AchievementDetail from '../views/AchievementDetail.vue'
import DatabaseDetail from '../views/DatabaseDetail.vue'
import TeamDetail from '../views/TeamDetail.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import SearchResult from '../views/SearchResult.vue'

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
    path: "/views/NewsDetail",
    name: 'news detail',
    component: NewsDetail
  },
  {
    path: "/views/AchievementDetail",
    name: 'achievement detail',
    component: AchievementDetail
  },
  {
    path: "/views/DatabaseDetail",
    name: 'database detail',
    component: DatabaseDetail,
    meta: {
        requireAuth: true
    }
  },
  {
    path: "/views/TeamDetail",
    name: 'team detail',
    component: TeamDetail
  },
  {
    path: "/views/AboutView",
    name: 'about view',
    component: AboutView
  },
  {
    path: "/views/LoginView",
    name: 'login',
    component: LoginView
  },
  {
    path: "/views/SearchResult",
    name: 'result',
    component: SearchResult
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some((auth) => auth.meta.requireAuth)) {
        let token = window.sessionStorage.getItem("token");
        if (token) {
            next();
        } else {
            next({
                path: "/views/LoginView"
            });
        }
    } else {
        next();
    }
})

export default router
