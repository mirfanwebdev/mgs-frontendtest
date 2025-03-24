<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
});
</script>

<template>
    <div class="flex flex-col gap-5 p-[50px] bg-white hover:bg-primary-red hover:opacity-50 relative">
        <slot name="icon"></slot>
        <h3 class="font-semibold text-xl">{{ title }}</h3>
        <p>{{ detail }}</p>
    </div>
</template>