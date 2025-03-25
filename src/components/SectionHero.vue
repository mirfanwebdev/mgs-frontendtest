<script setup>
import Button from './Button.vue';
</script>

<template>
    <div class="flex flex-wrap gap-4 justify-between items-center py-4 mx-4 lg:py-[92px] lg:ms-[150px] lg:me-[60px]">
        <div class="flex flex-col gap-4 lg:w-[450px] relative">
            <div>
                <h3 class="text-primary-red font-semibold text-2xl mb-3">We Are Here</h3>
                <h1 class="text-5xl">IT Consultant & Outsourcing</h1>
            </div>
            <p>
                We believe that technology is for every business.
                From roadside stall business, to publicy listed business.
                Elevate your business with technology.
            </p>
            <Button>Contact Us</Button>

            <!-- circle -->
            <div
                class="absolute top-0 left-0 transform -translate-1/2 w-[200px] h-[200px] bg-primary-red/10 rounded-full">
            </div>
        </div>
        <div class="lg:w-[700px]">
            <img class="w-full" src="@/assets/hero.png" alt="hero">
        </div>
    </div>
</template>