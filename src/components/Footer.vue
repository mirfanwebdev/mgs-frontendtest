<script setup>
import FooterItem from './FooterItem.vue';
import Link from './Link.vue';

const linksData = [
    {
        title: 'Services',
        links: [
            {
                name: 'IT Outsourcing',
                href: ''
            },
            {
                name: 'Digital Transformation',
                href: ''
            },
            {
                name: 'Carrer',
                href: ''
            }
        ]
    },
    {
        title: 'About',
        links: [
            {
                name: 'MGS',
                href: ''
            },
            {
                name: 'History',
                href: ''
            },
            {
                name: 'Our Team',
                href: ''
            }
        ]
    },
    {
        title: 'Contact',
        links: [
            {
                name: 'Call',
                href: ''
            },
            {
                name: 'Email',
                href: ''
            },
            {
                name: 'Location',
                href: ''
            }
        ]
    }
];

const socials = [
    {
        name: 'linkedin',
        src: '/src/assets/icon/social-linke.svg',
        href: '#',
    },
    {
        name: 'facebook',
        src: '/src/assets/icon/social-fb.svg',
        href: '#',
    },
    {
        name: 'instagram',
        src: '/src/assets/icon/social-ig.svg',
        href: '#',
    },
    {
        name: 'twitter',
        src: '/src/assets/icon/social-tw.svg',
        href: '#',
    }
];
</script>

<template>
    <div class="mx-4 lg:mx-[150px] lg:pt-20 lg:pb-7">
        <div class="flex flex-wrap justify-between items-center mb-8">
            <!-- logo -->
            <div class="max-w-[330px]">
                <div class="w-[130px] mb-5">
                    <img src="@/assets/logo-white.png" alt="logo">
                </div>
                <p>As an Information Technology Outsourcing (IT Outsourcing) company, we help your business to grow
                    through qualified human resources.</p>
            </div>
            <!-- links container -->
            <div class="flex flex-col lg:flex-row gap-5 lg:gap-25">
                <template v-for="item in linksData">
                    <FooterItem>
                        <template #title>{{ item.title }}</template>
                        <li v-for="link in item.links">
                            <Link :href="link.href">
                            {{ link.name }}
                            </Link>
                        </li>
                    </FooterItem>
                </template>
            </div>
        </div>
        <hr>
        <div class="flex gap-3 items-center py-3">
            <template v-for="item in socials">
                <a class="w-9" :href="item.href">
                    <img class="w-full" :src="item.src" :alt="item.name" />
                </a>
            </template>
        </div>
    </div>
</template>