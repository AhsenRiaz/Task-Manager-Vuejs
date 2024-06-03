<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTaskStore } from '@/store/taskStore'


import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const username = ref('')
const password = ref('')
const router = useRouter()
const taskStore = useTaskStore()

const login = async () => {
    console.log("ran")
    try {
        const response = await taskStore.login(username.value, password.value)
        console.log("response", response)
        if (response.success) {
            router.push('/')
        } else {
            alert('Wrong username or password')
        }

    } catch (error) {
        alert(error.message)
    }
}

</script>

<template>
    <div class="flex">
        <form @submit.prevent="login">
            <div class="grid items-center w-full gap-4">
                <div class="flex flex-col space-y-1.5">
                    <Label for="username">Name</Label>
                    <Input v-model="username" id="username" type="text" placeholder="Enter name" />
                </div>
                <div class="flex flex-col space-y-1.5">
                    <Label for="password">Password</Label>
                    <Input v-model="password" id="password" type="password" placeholder="Enter password" />
                </div>
            </div>
        </form>
        <Button @click="">Create Task</Button>
    </div>
</template>