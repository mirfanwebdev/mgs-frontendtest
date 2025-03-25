<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

defineProps({
    'label': {
        type: String,
        required: true
    }
});

const isOpen = ref(false);
const dropdownRef = ref(null);

function toggleDropdown() {
    isOpen.value = !isOpen.value;
};

function handleClickOutsite(event) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutsite);
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutsite);
});

</script>

<template>
    <div class="relative inline-block" ref="dropdownRef">
        <!-- dropdown button -->
        <button @click="toggleDropdown" class="cursor-pointer">
            {{ label }}
        </button>

        <!-- dropdown menu -->
        <div v-if="isOpen"
            class="flex gap-6 bg-white rounded-xl drop-shadow-md p-7.5 absolute z-10 top-0 -translate-x-1/2 translate-y-1/4">
            <slot></slot>
        </div>
    </div>
</template>