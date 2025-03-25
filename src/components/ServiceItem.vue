<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    link: {
        type: String
    }
});
</script>

<template>
    <a :href="link">
        <div class="p-[50px] outline outline-slate-200 rounded-lg">
            <slot name="icon"></slot>
            <div class="flex flex-col gap-5">
                <h3 class="font-bold text-lg">{{ title }}</h3>
                <img class="w-[180px]" src="@/assets/devider.svg" alt="line-break">
                <p class="text-sm">{{ description }}</p>
            </div>
        </div>
    </a>
</template>