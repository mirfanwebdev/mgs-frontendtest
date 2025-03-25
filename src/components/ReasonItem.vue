<script setup>
defineProps({
    'title': {
        type: String,
        required: true
    },
    'description': {
        type: String,
    },
});
</script>

<template>
    <div class="rounded-lg bg-white p-7 lg:max-w-[310px]">
        <img class="w-15 mb-2.5" src="@/assets/icon/reason.svg" alt="reason">
        <div class="mb-5">
            <h3 class="font-semibold text-xl">{{ title }}</h3>
            <div class="w-[150px] h-2 bg-gradient-to-r from-primary-red to-white to-80%"></div>
        </div>
        <p>{{ description }}</p>
    </div>
</template>