import { createMemoryHistory, createRouter } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import TaskList from '@/views/TaskList.vue';

const routes = [
  { path: '/', component: LoginView },
  { path: '/login', component: LoginView }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
