<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <div class="flex justify-between items-center px-6 py-4 bg-primary-foreground mx-4 my-4 rounded-lg">
            <div>
                <p>Assignment</p>
            </div>
            <div class="flex gap-x-6" >
                <RouterLink to="/">Tasks</RouterLink>
                <RouterLink to="/create">Create Tasks</RouterLink>
            </div>
        </div>
        <div class="w-[1400px] mx-auto">
            <slot />
        </div>
    </div>
</template>