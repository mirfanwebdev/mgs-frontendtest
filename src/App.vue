<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SectionHero from '@/components/SectionHero.vue';
import SectionService from '@/components/SectionService.vue';
import SectionAbout from '@/components/SectionAbout.vue';
import SectionReason from '@/components/SectionReason.vue';
import Form from '@/components/Form.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <header>
    <Header />
  </header>

  <main class="overflow-hidden">
    <section class="bg-white/25">
      <SectionHero />
    </section>

    <section class="w-full py-[168px]">
      <SectionService />
    </section>

    <!-- reason section -->
    <section class="bg-slate-100">
      <SectionReason />
    </section>

    <section>
      <SectionAbout />
    </section>

    <!-- purpose section -->
    <section class="w-full h-50 lg:h-100 bg-primary-red text-white relative">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 class="text-2xl">Our Purpose</h3>
        <h1 class="text-5xl">Technology Inclusivity</h1>
      </div>

      <div class="absolute top-0 right-0 h-full">
        <img class="h-full" src="@/assets/tech.svg" alt="tech">
      </div>
    </section>

    <!-- join career section -->
    <section class="w-full">
      <div class="mx-4 lg:mx-[150px] my-4 lg:mt-[230px] lg:mb-[170px] bg-[url(@/assets/career.png)] bg-cover">
        <div class="flex flex-col gap-5 items-center lg:px-10 lg:py-[105px]">
          <h1 class="text-5xl font-bold text-white text-center">Build your Career while building inclusive technology
            with us</h1>
          <Button>Join Now</Button>
        </div>
      </div>
    </section>

    <!-- form section -->
    <section class="bg-primary-red/10">
      <div class="mx-4 lg:mx-[150px] flex flex-wrap gap-10">
        <!-- form caption -->
        <div class="flex flex-col gap-3">
          <h3 class="text-primary-red font-semibold">Contact Us</h3>
          <h2 class="font-semibold text-3xl">Haven’t gotten what you want yet ?</h2>
          <div class="flex flex-col gap-7.5">
            <div>
              <div>
                <p>Call</p>
                <p>0274 4299 535 <br>
                  + 62 877 203 203 94
                </p>
              </div>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  </main>

  <footer class="bg-secondary-blue text-white">
    <Footer />
  </footer>
</template>