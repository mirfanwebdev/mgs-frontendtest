<script setup>
import Button from './Button.vue';
</script>
<template>
    <div class="mx-auto lg:ms-[150px] py-6 lg:pt-[162px] lg:pb-[102px]">
        <div class="w-[300px] lg:w-[856px] relative">
            <img class="w-full" src="@/assets/office.png" alt="about-illustration">

            <div
                class="absolute max-w-100 top-0 right-0 transform translate-x-3/4 translate-y-1/4 p-12 bg-primary-red/90 text-white">
                <h1 class="text-5xl font-semibold mb-5">About Us</h1>
                <p class="mb-8 lg:text-lg">
                    As an Information Information Technology Outsourcing or (IT Outsourcing) company, we help your
                    business to grow through qualified human resources.
                </p>
                <Button variant="white">About Our Company</Button>
            </div>
        </div>
    </div>
</template>