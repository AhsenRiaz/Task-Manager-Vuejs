<script setup>
import { onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useTaskStore } from '@/store/taskStore'
import { Badge } from '@/components/ui/badge'


const taskStore = useTaskStore()
const router = useRouter()

const userTasks = computed(() => {
    return taskStore.tasksByUser
})

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
            <div v-for="(tasks) in userTasks" :key="tasks.id" class="rounded-lg shadow-2xl p-4   ">
                <p class="text-xl">{{ tasks.title }}</p>
                <p class="mt-4">
                    {{ tasks.description ? tasks.description :
                        'Create a node server and create login and signup apis, afterwards deploy the backend to AWS' }}
                </p>
                <div class="grid place-content-end place-items-end">
                    <Badge class="mt-8" variant="outline"
                        :class="{ 'bg-red-500': tasks.priority === 'high', 'bg-yellow-300': tasks.priority === 'medium', 'bg-green-500': tasks.priority === 'low' }">
                        {{ tasks.priority }}
                    </Badge>
                </div>
            </div>
        </div>
    </div>
</template>