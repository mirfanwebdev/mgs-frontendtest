<script setup>
import ServiceItem from './ServiceItem.vue';

const services = [
    {
        "title": "Alih Daya Teknologi Informasi",
        "description": "Sewa tenaga ahli IT terbaik kami. Ceritakan kebutuhan bisnis Anda.",
        "link": "/itoutsourcing",
    }
]
</script>
<template>
    <div class="flex flex-col items-center gap-8">
        <div class="text-center">
            <h3 class="text-primary-red font-semibold text-xl mb-3">What we Have</h3>
            <h2 class="font-semibold text-5xl">Our Services</h2>
        </div>
        <div class="flex flex-wrap gap-3">
            <template v-for="service in services">
                <ServiceItem :title="service.title" :description="service.description" :link="service.link">
                    <template #icon>
                        <slot name="icon"></slot>
                    </template>
                </ServiceItem>
            </template>
        </div>
    </div>
</template>