<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTaskStore } from '@/store/taskStore'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card'

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
        await taskStore.login(username.value, password.value)
        router.push('/login')
    } catch (error) {
        alert(error.message)
    }
}

</script>

<template>
    <div class="flex justify-center items-center h-[90vh]">
        <Card class="w-[350px] bg-primary-foreground">
            <CardHeader>
            </CardHeader>
            <CardContent>
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
            </CardContent>
            <CardFooter class="flex justify-center px-6 pb-6">
                <Button @click="login">Login</Button>
            </CardFooter>
        </Card>
    </div>
</template>