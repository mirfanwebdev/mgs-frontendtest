<script setup>
defineProps({
    modelValue: {
        type: [String, Number],
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['update:modelValue']);
function updateValue(event) {
    emit("update:modelValue", event.target.value);
}
</script>

<template>
    <input class="bg-slate-100 py-2 px-4" @input="updateValue" :type="type" :value="modelValue"
        :placeholder="placeholder" />
</template>