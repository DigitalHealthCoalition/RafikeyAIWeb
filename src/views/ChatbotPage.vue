<script setup lang="ts">

import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="h-screen snap-y snap-mandatory overflow-y-scroll hide-scrollbar">
<!--    first slide-->
    <section class="h-screen snap-start flex  space-y-6 flex-col items-center justify-center">
      <div>
        <h2 class="text-deep-cove-950 font-extrabold !text-5xl">Hello</h2>
      </div>
      <div>
        <h2 class="text-deep-cove-950 font-extrabold !text-5xl" >I am Rafikey</h2>
      </div>
      <div class="text-xl w-2/6 text-black text-center">
        <p>I'm here whenever you need someone to talk to - no pressure, no judgement and always private. You can tell me how you're feeling, ask questions or just vent. I've got you.</p>
      </div>
      <div>
        <img src="@/assets/images/chatbot-1.png" alt="chatbot-image" />
      </div>
      <div class="w-1/6 bg-darkgray rounded-full flex justify-between p-3">
        <div><span class="text-white">Ask Rafikey</span></div>
        <div class="bg-stone-200 rounded-full h-8 w-8 flex justify-center items-center">
          <span class="material-icons-outlined text-shark-950">arrow_upward</span>
        </div>
      </div>
    </section>

<!--    second slide-->
    <section class="h-screen snap-start flex flex-stretch  items-center justify-center gap-8 w-11/12 mx-auto">
      <div class="flex gap-6 w-8/12  justify-center items-stretch">
        <div class="flex flex-1  flex-col border-shark-950 border-2 rounded-2xl p-10">
          <p class="text-shark-950  text-2xl font-bold"> What Can You Talk to Me About</p>
          <div class="pt-10 text-xl text-shark-950">
            <p class="">Honestly? Anything</p>
            <ul class="list-disc ps-8">
              <li>School or exam stress</li>
              <li>Feeling down, anxious or just "off</li>
              <li>friendship drama or family stuff</li>
              <li>Identity, relationships or even crushes</li>
              <li>Or just: "I don't know what's wrong." That's totally okay too.</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-1  flex-col  border-2 border-shark-950 px-8 py-12 rounded-2xl w-2/6">
          <p class="text-shark-950 text-2xl font-bold ">How I Work</p>
          <div class="space-y-5">
            <div class="pt-10 text-xl text-shark-950">
              <p>You type what's on your mind</p>
              <p>I'll listen and respond like a friend</p>
            </div>
            <div class="text-xl">
              <p class="">I can guide you, support you or share helpful tips</p>
              <p class="">If things feel too heavy, I'll help you figure out what to do next - even connect you to real people if you ask </p>
            </div>
          </div>
        </div>

      </div>

    </section>
    <section class="h-screen snap-start flex space-y-8 flex-col items-center justify-center">
      <div class="flex flex-col space-y-6  items-center justify-center">
        <div>
          <h2 class="text-shark-950  text-4xl font-bold">Watch Me at Work</h2>
        </div>
        <div class="flex flex-col text-shark-950 items-center justify-center text-xl">
          <p class="">Sometimes it helps to see how it works before you open up.</p>
          <p>Here's a look at what chatting with me feels like</p>
        </div>
      </div>
      <div class="relative">
        <img src="@/assets/images/about-7.png" alt="chatting-experience-image"/>
        <img  class="absolute left-1/2 top-1/2" src="@/assets/images/Polygon-1.png" alt="play-button"/>
      </div>
  </section>
    <section class="h-screen snap-start flex items-center justify-center">
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
