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
        <button @click="toggleDropdown" class="cursor-pointer inline-flex gap-2.5 items-center">
            {{ label }}
            <img v-if="!isOpen" class="w-5" src="@/assets/icon/chevron-up.svg" alt="open">
            <img v-else class="w-5" src="@/assets/icon/chevron-down.svg" alt="close">
        </button>


        <!-- dropdown menu -->
        <div v-if="isOpen"
            class="flex gap-6 bg-white rounded-xl drop-shadow-md p-7.5 absolute z-10 top-0 -translate-x-1/2 translate-y-1/2">
            <slot></slot>
        </div>
    </div>
</template>