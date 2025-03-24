<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SectionHero from '@/components/SectionHero.vue';
</script>

<template>
  <header>
    <Header />
  </header>

  <section class="bg-white/25">
    <SectionHero />
  </section>

  <footer class="bg-secondary-blue text-white">
    <Footer />
  </footer>
</template>