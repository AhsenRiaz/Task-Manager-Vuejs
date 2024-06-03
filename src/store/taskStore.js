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
            const filteredTasks = state.tasks.filter(task => task.assignee == state.loggedInUser.id);
            return filteredTasks
        },
    },

    actions: {
        async fetchTasks() {
            try {
                const response = await axios.get('http://localhost:3000/tasks');
                this.tasks = response.data;
            } catch (error) {
                console.error("Failed to fetch tasks:", error);
            }
        },
        async fetchUsers() {
            try {
                const response = await axios.get('http://localhost:3000/users');
                this.users = response.data;
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        },
        async createTask(task) {
            console.log("task", task)
            try {
                const response = await axios.post('http://localhost:3000/tasks', task);
                console.log("response", response)
                this.tasks.push(response.data);
            } catch (error) {
                console.error("Failed to create task:", error);
            }
        },
        async login(username, password) {
            if (this.users.length === 0) {
                await this.fetchUsers();
            }
            const user = await this.users.find(user => user.username === username && user.password)
            this.loggedInUser = user
            return user ? { success: true } : { success: false }

        }
    }
});
