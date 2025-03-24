<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SectionHero from '@/components/SectionHero.vue';
import SectionAbout from '@/components/SectionAbout.vue';
</script>

<template>
  <header>
    <Header />
  </header>

  <section class="bg-white/25">
    <SectionHero />
  </section>

  <section>
    <SectionAbout />
  </section>

  <section class="w-full lg:h-100 bg-primary-red text-white relative">
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h3 class="text-2xl">Our Purpose</h3>
      <h1 class="text-5xl">Technology Inclusivity</h1>
    </div>

    <div class="absolute top-0 right-0 h-full">
      <img class="h-full" src="@/assets/tech.svg" alt="tech">
    </div>
  </section>

  <footer class="bg-secondary-blue text-white">
    <Footer />
  </footer>
</template>