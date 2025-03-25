<script setup>
import { ref } from 'vue';
import InputCustom from './InputCustom.vue';
import { postContact } from '@/utils/api';

const initialForm = {
    name: "",
    email: "",
    phone: "",
    message: "",
}
const formData = ref({ ...initialForm })

async function handleSubmit() {
    if (!formData.value.name || !formData.value.email || !formData.value.phone || !formData.value.message) {
        alert('Please fill all the fields');
    } else {
        await postContact(formData.value)
        formData.value = { ...initialForm }
    }
};
</script>

<template>
    <div class="bg-white p-7 rounded-lg flex-1">
        <form class="flex flex-col gap-5" @submit.prevent="handleSubmit">
            <InputCustom type="text" v-model="formData.name" placeholder="Name" />
            <InputCustom type="email" v-model="formData.email" placeholder="Email" />
            <InputCustom type="text" v-model="formData.phone" placeholder="Phone Number" />
            <textarea rows="5" class="bg-slate-100 py-2 px-4" v-model="formData.message"
                placeholder="Your Message..."></textarea>
            <button type="submit"
                class="w-fit rounded-md bg-primary-red hover:bg-white outline outline-transparent hover:outline-primary-red text-white hover:text-primary-red py-2 px-4 cursor-pointer">
                Send
            </button>
        </form>
    </div>
</template>