<script setup>
import ContainerDropdown from './ContainerDropdown.vue';
import Link from './Link.vue';

const servicesList = [
    {
        'title': 'IT Outsourcing',
        'items': [
            'Independent Staff Augmentation',
            'Team Augmentation'
        ]
    },
    {
        'title': 'Digital Transformation',
        items: [
            'Digitalisation',
            'Digitalisation',
        ]
    }
];
const aboutList = [
    'About Mgs',
    'Case Study',
    'Blog'
];
</script>

<template>
    <div class="flex mx-4 lg:mx-[150px] justify-between items-center drop-shadow-md">
        <!-- logo container -->
        <div class="w-[130px]">
            <img class="w-full" src="@/assets/logo.png" alt="logo" />
        </div>
        <!-- navigation -->
        <div class="flex gap-2 lg:gap-8 items-center">
            <!-- services dropdown -->
            <ContainerDropdown label="Our Services">
                <template v-for="service in servicesList">
                    <div class="flex flex-col gap-4 text-nowrap">
                        <h4 class="text-lg text-secondary-blue font-semibold">
                            <Link href="#">{{ service.title }}</Link>
                        </h4>
                        <ul class="text-sm list-disc">
                            <li v-for="item in service.items">
                                <Link href="#">{{ item }}</Link>
                            </li>
                        </ul>
                    </div>
                </template>
            </ContainerDropdown>

            <!-- about dropdown -->
            <ContainerDropdown label="About">
                <div class="flex flex-col gap-3 text-nowrap text-sm">
                    <template v-for="item in aboutList">
                        <Link href="#">{{ item }}</Link>
                    </template>
                </div>
            </ContainerDropdown>

            <!-- career -->
            <Link href="#">Career</Link>

            <div class="border px-1.5 py-0.5 rounded-md text-xs inline-flex">
                EN <img src="@/assets/icon/chevron-up.svg" alt="open">
            </div>
        </div>
    </div>
</template>