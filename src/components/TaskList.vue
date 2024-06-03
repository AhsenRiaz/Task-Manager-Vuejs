<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTaskStore } from '@/store/taskStore'
import { Badge } from '@/components/ui/badge'
import CreateTask from './CreateTask.vue'
import { Button } from '@/components/ui/button'


const taskStore = useTaskStore()
const router = useRouter()

onBeforeMount(() => {
    if (!taskStore.loggedInUser) {
        router.push('/login')
    }
})

</script>

<template>
    <div>
        <!-- <div>{{ JSON.stringify(taskStore.tasksByUser) }}</div> -->

        <div class="grid grid-cols-3 gap-16  ">
            <div v-for="(tasks) in taskStore.tasksByUser" :key="tasks.id" class="rounded-lg shadow-2xl p-4   ">
                <p class="text-xl">{{ tasks.title }}</p>
                <p class="mt-4">
                    {{ tasks.description ? tasks.description :
                        'Create a node server and create login and signup apis, afterwards deploy the backend to AWS' }}
                </p>
                <Badge class="mt-8" variant="outline"
                    :class="{ 'bg-red-500': tasks.priority === 'high', 'bg-yellow-300': tasks.priority === 'medium', 'bg-green-500': tasks.priority === 'low' }">
                    {{ tasks.priority }}
                </Badge>
            </div>
            <RouterLink to="/create" >Create Task</RouterLink>
        </div>
    </div>
</template>