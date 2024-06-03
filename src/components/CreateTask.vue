<script setup>
import { ref, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useTaskStore } from '@/store/taskStore'


import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const title = ref('')
const description = ref('')
const priority = ref('')
const assignTo = ref('')


const router = useRouter()
const taskStore = useTaskStore()


onBeforeMount(() => {
    if (!taskStore.loggedInUser) {
        router.push('/login')
    }
})

const create = async () => {
    try {
        const task = {
            title: title.value,
            description: description.value,
            priority: priority.value,
            assignee: assignTo.value
        }
        await taskStore.createTask(task)
    } catch (error) {
        console.log("error", error)
    }
}
</script>

<template>
    <div class="flex">
        <form @submit.prevent="create">
            <div class="grid items-center w-full gap-4">
                <div class="flex flex-col space-y-1.5">
                    <Label for="title">Title</Label>
                    <Input required v-model="title" id="title" type="text" placeholder="Title of task" />
                </div>
                <div class="flex flex-col space-y-1.5">
                    <Label for="description">Description</Label>
                    <Input required v-model="description" id="description" type="text"
                        placeholder="Enter description" />
                </div>
                <div class="flex flex-col space-y-1.5">
                    <Label for="assign">Assign To</Label>
                    <Input required v-model="assignTo" id="assign" type="text" placeholder="Enter id" />
                </div>
                <div class="flex flex-col space-y-1.5">
                    <Label for="priority">Prioity</Label>
                    <Input required v-model="priority" id="priority" type="text" placeholder="Enter priority" />
                </div>
            </div>
            <Button type="submit" class="mt-4" variant="secondary">Create Task</Button>
        </form>
    </div>
</template>