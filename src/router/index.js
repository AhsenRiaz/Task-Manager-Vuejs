import { createWebHistory, createRouter } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import TaskList from '@/views/TasksView.vue';
import CreateTask from '@/views/CreateTask.vue'

const routes = [
  { path: '/', component: TaskList },
  { path: '/login', component: LoginView },
  { path: '/create', component: CreateTask }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
})
