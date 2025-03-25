<template>
    <div class="flex flex-col gap-5">
        <h3 class="font-semibold text-lg">
            <slot name="title"></slot>
        </h3>
        <ul class="flex flex-col gap-4">
            <slot></slot>
        </ul>
    </div>
</template>