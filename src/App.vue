<script setup>
import { RouterView } from 'vue-router';
import { onBeforeMount } from "vue";
import { useTaskStore } from '@/store/taskStore'

const taskStore = useTaskStore();

onBeforeMount(async () => {
    await taskStore.fetchTasks()
})



</script>

<template>
    <RouterView></RouterView>
</template>
