import { createMemoryHistory, createRouter } from 'vue-router'

import LoginView from '@/components/LoginView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '/login', component: LoginView },
    ]
  }

]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})