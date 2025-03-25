<script setup>
import TitleSection from './TitleSection.vue';
import ReasonItem from './ReasonItem.vue';
import { onMounted, ref } from 'vue';
import { getReason } from '@/utils/api';

const reasons = ref([]);

onMounted(async () => {
    const result = await getReason()
    reasons.value = result
});

</script>
<template>
    <div class="mx-auto  p-4 lg:py-[170px] flex flex-col gap-4 lg:gap-12 items-center">
        <TitleSection title="Reason why mgs is the right place" subtitle="Why mgs ?" />
        <div class="flex flex-wrap gap-5">
            <template v-for="reason in reasons">
                <ReasonItem :title="reason.title" :description="reason.description" />
            </template>
        </div>
    </div>
</template>