<script setup>
defineProps({
    'title': {
        type: String,
        required: true
    },
    'subtitle': {
        type: String,
    },
});
</script>

<template>
    <div class="text-center">
        <h3 class="text-primary-red font-semibold text-xl mb-3">{{ subtitle }}</h3>
        <h2 class="font-semibold text-5xl">{{ title }}</h2>
    </div>
</template>