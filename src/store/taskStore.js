import { defineStore } from "pinia";
import axios from 'axios';

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
        users: [],
        loggedInUser: null,
        filters: {
            priority: '',
            dateRange: [],
            assignee: null,
        },
    }),
    
    getters: {
        tasksByUser: (state) => {
            return state.tasks.filter(task => task.assignee === state.loggedInUser.id)
        },
    },

    actions: {
        async fetchTasks() {
            const response = await axios.get('http://localhost:3000/tasks');
            this.tasks = response.data;
        },
        async fetchUsers() {
            const response = await axios.get('http://localhost:3000/users');
            this.users = response.data;
        },
        async createTask(task) {
            const response = await axios.post('http://localhost:3000/tasks', task);
            this.tasks.push(response.data);
        },
        login(username, password) {
            const user = this.users.find(user => user.username === username && user.password === password);
            if (user) {
                this.loggedInUser = user;
            } else {
                throw new Error('Invalid username or password');
            }
        },
    }
})