<script setup>
import Form from './Form.vue';

const contactlist = [
    {
        "title": "Call",
        "description": "0274 4299 535 <br> + 62 877 203 203 94"
    },
    {
        "title": "Email",
        "description": "info@megagiga.co.id"
    },
    {
        "title": "Location",
        "description": "Pondok Permai Wirosaban B10, Jl. Ki Ageng Pemanahan Bantul Yogyakarta 55191"
    }
];
</script>

<template>
    <div class="mx-4 lg:mx-[150px] flex flex-wrap gap-10">
        <!-- form caption -->
        <div class="flex flex-col gap-3">
            <h3 class="text-primary-red font-semibold">Contact Us</h3>
            <h2 class="font-semibold text-3xl">Haven’t gotten what you want yet ?</h2>

            <!-- contact list -->
            <div class="flex flex-col gap-7.5">
                <div v-for="contact in contactlist" class="max-w-[308px]">
                    <div>
                        <p>{{ contact.title }}</p>
                        <p v-html="contact.description"></p>
                    </div>
                </div>
            </div>
        </div>
        <Form />
    </div>
</template>