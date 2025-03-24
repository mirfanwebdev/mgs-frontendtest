<script setup>
import FooterItem from './FooterItem.vue';
</script>

<template>
    <div class="px-4 lg:px-[150px] lg:pt-20 lg:pb-7">
        <div class="flex justify-between items-center">
            <!-- logo -->
            <div class="max-w-[330px]">
                <p>As an Information Technology Outsourcing (IT Outsourcing) company, we help your business to grow through qualified human resources.</p>
            </div>
            <!-- links container -->
            <div class="flex gap-[100px]">
                <FooterItem>
                    <template #title>Services</template>
                    <li>IT Outsourcing</li>
                    <li>Digital Transformation</li>
                    <li>Carrer</li>
                </FooterItem>
                <FooterItem>
                    <template #title>About</template>
                    <li>MGS</li>
                    <li>History</li>
                    <li>Our Team</li>
                </FooterItem>
                <FooterItem>
                    <template #title>Contact</template> 
                    <li>Call</li>
                    <li>Email</li>
                    <li>Location</li>
                </FooterItem>
            </div>
            <hr>
            <div class="flex gap-3"></div>
        </div>
    </div>
</template>