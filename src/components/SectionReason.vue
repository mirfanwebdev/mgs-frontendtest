<script setup>
import TitleSection from './TitleSection.vue';
import ReasonItem from './ReasonItem.vue';

const reasons = [
    {
        "title": "Affordable",
        "description": "We can provide modular services and be done incrementally, it keepsour services affordable."
    }
]
</script>
<template>
    <div class="mx-auto my-4 lg:py-[170px] flex flex-col gap-4 lg:gap-12 items-center">
        <TitleSection title="Reason why mgs is the right place" subtitle="Why mgs ?" />
        <div class="flex flex-wrap gap-5">
            <template v-for="reason in reasons">
                <ReasonItem :title="reason.title" :description="reason.description" />
            </template>
        </div>
    </div>
</template>