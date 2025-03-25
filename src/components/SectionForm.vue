<script setup>
import Form from './Form.vue';

const contactlist = [
    {
        "title": "Call",
        "description": "0274 4299 535 <br> + 62 877 203 203 94",
        "src": "/src/assets/icon/form-phone.svg"
    },
    {
        "title": "Email",
        "description": "info@megagiga.co.id",
        "src": "/src/assets/icon/form-mail.svg"
    },
    {
        "title": "Location",
        "description": "Pondok Permai Wirosaban B10, Jl. Ki Ageng Pemanahan Bantul Yogyakarta 55191",
        "src": "/src/assets/icon/form-maps.svg"
    }
];
</script>

<template>
    <div class="mx-4 lg:mx-[150px] py-[180px] flex flex-wrap gap-10">
        <!-- form caption -->
        <div class="flex flex-col gap-3 lg:w-[400px]">
            <h3 class="text-primary-red text-xl font-semibold">Contact Us</h3>
            <h2 class="font-semibold text-4xl">Haven’t gotten what you want yet ?</h2>

            <!-- contact list -->
            <div class="flex flex-col gap-7.5">
                <div v-for="contact in contactlist" class="max-w-[308px] flex gap-4">
                    <img class="w-17" :src="contact.src" :alt="contact.title">
                    <div>
                        <p>{{ contact.title }}</p>
                        <p class="text-sm" v-html="contact.description"></p>
                    </div>
                </div>
            </div>
        </div>
        <Form />
    </div>
</template>