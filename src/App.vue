<script setup>
import { RouterView } from 'vue-router';
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
import { useTaskStore } from '@/store/taskStore'

const taskStore = useTaskStore();

onBeforeMount(async () => {
   await taskStore.fetchTasks()
})

</script>

<template>
    <RouterView />
</template>
