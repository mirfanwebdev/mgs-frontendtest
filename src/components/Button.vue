<script setup>
defineProps({
    variant: {
        type: String,
        default: 'primary'
    },
    href: {
        type: String
    }
});
</script>

<template>
    <template v-if="variant === 'white'">
        <a href="{{ href }}" class="rounded-md bg-white hover:bg-primary-red text-primary-red hover:text-white  py-2 px-4">
            <slot></slot>
        </a>
    </template>
    <template v-else>
        <a href="{{ href }}" class="rounded-md bg-primary-red hover:bg-white text-white hover:text-primary-red py-2 px-4">
            <slot></slot>
        </a>
    </template>
</template>