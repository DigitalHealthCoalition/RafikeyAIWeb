<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="h-screen  hide-scrollbar w-11/12 mx-auto ">
    <section class="h-screen w-11/12 mx-auto pt-20">
      <div class="space-y-5">
        <div class="lg:text-4xl text-2xl text-shark-950 font-bold flex justify-center">
          <h2>Contact Us</h2>
        </div>
        <div class="text-sm lg:text-lg lg:w-1/3 w-3/4 mx-auto text-center text-shark-950">
          <p>Got questions, feedback, or something on your mind? We'd love to hear from you.</p>
        </div>
        <div class="lg:flex mx-auto lg:space-y-0 space-y-8  items-stretch  w-full lg:justify-center gap-8 pt-10">
          <div class="border-2 border-shark-950 rounded-2xl lg:p-12 p-2">
            <div class="lg:space-y-8 space-y-5 flex flex-col items-center">
              <p class="lg:text-3xl text-xl text-shark-950 font-bold text-center">Tech Support</p>
              <p class="text-sm lg:text-lg">Running into bugs orr issues on the site?</p>
              <p class="text-sm lg:text-lg">Email:<a href="" class="text-cerise-400">tech@rafikey.org</a></p>
            </div>
          </div>
          <div class="border-2 border-shark-950 rounded-2xl lg:p-12 p-2  ">
            <div class="space-y-8 flex flex-col items-center">
              <p class="lg:text-3xl text-xl text-shark-950 font-bold text-center">Data & Privacy Questions</p>
              <p class="text-sm lg:text-lg">Questions about your info or account privacy?</p>
              <p class="text-sm lg:text-lg">Email:<a href="" class="text-cerise-400">tech@rafikey.org</a></p>
            </div>
          </div>
        </div>

        <div class="flex justify-center lg:w-3/4 mx-auto">
          <div class="border-2 border-shark-950 rounded-2xl lg:p-8 p-2 w-full lg:w-1/2">
            <div class="space-y-8 flex flex-col items-center">
              <p class="lg:text-3xl text-xl text-shark-950 font-bold text-center">General Inquiries</p>
              <div>
                <p class="text-sm lg:text-lg">Got a question about how Rafikey works?</p>
                <p class="text-sm lg:text-lg text-center">Need help with your account?</p>
              </div>
              <p class="text-sm lg:text-lg">Email:<a href="" class="text-cerise-400">tech@rafikey.org</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="h-screen pt-10 lg:pt-0">
      <FooterComponent />
    </section>
  </div>
</template>

<style scoped>
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
