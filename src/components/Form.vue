<script setup>
import { ref } from 'vue';
import InputCustom from './InputCustom.vue';

const formData = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
})

// async function handleSubmit() {
// }
</script>

<template>
    <div class="bg-white p-7 rounded-lg w-full lg:w-1/2">
        <form class="flex flex-col gap-5" action="">
            <InputCustom type="text" v-model="formData.name" placeholder="Name" />
            <InputCustom type="email" v-model="formData.email" placeholder="Email" />
            <InputCustom type="text" v-model="formData.phone" placeholder="Phone Number" />
            <textarea class="bg-slate-100 py-2 px-4" v-model="formData.message"
                placeholder="Your Message..."></textarea>
            <button type="submit"
                class="w-fit rounded-md bg-primary-red hover:bg-white outline outline-transparent hover:outline-primary-red text-white hover:text-primary-red py-2 px-4 cursor-pointer">
                Send
            </button>
        </form>
    </div>
</template>