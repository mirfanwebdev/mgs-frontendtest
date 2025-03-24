<template>
    <div class="flex flex-col gap-8">
        <h3>
            <slot name="title"></slot>
        </h3>
        <ul class="flex flex-col gap-5">
            <slot></slot>
        </ul>
    </div>
</template>