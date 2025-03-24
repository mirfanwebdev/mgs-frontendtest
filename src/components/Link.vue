<script setup>
defineProps({
    href: {
        type: String,
        required: true
    }
});
</script>

<template>
    <a class="hover:text-primary-red" href="{{ href }}">
        <slot></slot>
    </a>
</template>