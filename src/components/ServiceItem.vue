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
    <a class="flex-1 group relative" :href="link">
        <div
            class="p-[50px] h-full bg-white group-hover:bg-primary-red/20 group-hover:opacity-40 outline outline-slate-200 rounded-lg">
            <slot name="icon"></slot>
            <div class="flex flex-col gap-5">
                <h3 class="font-bold text-lg">{{ title }}</h3>
                <img class="w-[180px]" src="@/assets/devider.svg" alt="line-break">
                <p>{{ description }}</p>
            </div>
        </div>
        <div
            class="hidden absolute group-hover:block w-15 top-1/2 right-0 transform -translate-x-full -translate-y-1/2">
            <img class="w-full" src="@/assets/icon/arrow-right.svg" alt="arrow">
        </div>
    </a>
</template>