<template>
  <div class="w-11/12 mx-auto space-y-16">
    <!-- CONTACT HEADER -->
    <section class="text-center pt-20 lg:pt-32 pb-10">
      <h2 class="font-changa-one text-[24px] lg:text-[48px] text-lightGrayFour">Contact Us</h2>
      <p class="font-urbanist font-semibold lg:text-[20px] text-[16px] leading-[120%] lg:w-1/3 w-full mx-auto mt-4">
        Got questions, feedback, or something on your mind? We'd love to hear from you.
      </p>
    </section>

    <!-- CONTACT CARDS -->
    <section class="mx-auto xl:w-10/12 grid gap-8 lg:grid-cols-2 pt-10">
      <ContactCard
        title="Tech Support"
        description="Running into bugs or issues on the site?"
      />
      <ContactCard
        title="Data & Privacy Questions"
        description="Questions about your info or account privacy?"
      />
    </section>

    <!-- GENERAL INQUIRIES -->
    <section class="mx-auto xl:w-10/12 pt-10">
      <ContactCard
        title="General Inquiries"
        description="Got a question about how Rafikey works? Need help with your account?"
      />
    </section>

    <!-- FOOTER -->
    <section class="pt-16 md:pt-20 lg:pt-24">
      <FooterComponent />
    </section>
  </div>
</template>

<script setup>
import ContactCard from '@/components/ContactCard.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>


<style scoped>
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
