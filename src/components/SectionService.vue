<script setup>
import { onMounted, ref } from 'vue';
import ServiceItem from './ServiceItem.vue';
import TitleSection from './TitleSection.vue';
import { getService } from '@/utils/api';

const services = ref([]);

onMounted(async () => {
    const data = await getService();
    services.value = data;
});

</script>
<template>
    <div class="flex flex-col items-center gap-8">
        <TitleSection title="Our Service" subtitle="What we Have" />
        <div class="flex flex-wrap gap-3 items-stretch">
            <template v-for="service in services">
                <ServiceItem :title="service.title" :description="service.description" :link="service.link">
                    <template #icon>
                        <img class="w-20" src="@/assets/icon/service.svg" alt="service-icon" />
                    </template>
                </ServiceItem>
            </template>
        </div>
    </div>
</template>