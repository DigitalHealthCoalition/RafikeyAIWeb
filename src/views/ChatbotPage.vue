<script setup lang="ts">

import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="h-screen hide-scrollbar overflow-x-hidden">
<!--    first slide-->
    <section class="h-screen  flex py-20  lg:space-y-6 space-y-10  flex-col items-center md:justify-center">
      <div class="flex flex-col items-center lg:space-y-4  space-y-2">
        <div>
          <h2 class="text-deep-cove-950 font-extrabold lg:!text-5xl text-2xl">Hello</h2>
        </div>
        <div>
          <h2 class="text-deep-cove-950 font-extrabold lg:!text-5xl text-2xl" >I am Rafikey</h2>
        </div>
      </div>

      <div class="text-sm lg:text-lg xl:w-1/5 lg:w-2/5 w-4/5 text-black text-center">
        <p>I'm here whenever you need someone to talk to - no pressure, no judgement and always private. You can tell me how you're feeling, ask questions or just vent. I've got you.</p>
      </div>
      <div class=" w-1/2 lg:w-full flex justify-center items-center">
        <img src="@/assets/images/chatbot-1.png" alt="chatbot-image" />
      </div>
      <div class="lg:w-1/5 md:w-2/5 w-3/5 bg-darkgray rounded-full flex justify-between p-4">
        <div><span class="text-white">Ask Rafikey</span></div>
        <div class="bg-stone-200 rounded-full h-8 w-8 flex justify-center items-center">
          <span class="material-icons-outlined text-shark-950">arrow_upward</span>
        </div>
      </div>
    </section>


<!--    second slide-->
    <section class="h-screen  flex w-11/12 mx-auto   lg:space-y-6 space-y-10  flex-col items-center md:justify-center">
      <div class="lg:flex lg:space-y-0 space-y-16 gap-6 xl:w-9/12 w-11/12  mx-auto">
        <div class="flex flex-1  flex-col border-shark-950 border-2 lg:px-8 lg:py-12  rounded-2xl py-10 px-4 ">
          <p class="text-shark-950  text-2xl text-center font-bold"> What Can You Talk to Me About?</p>
          <div class="lg:pt-10 pt-4 text-sm lg:text-lg text-shark-950">
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
        <div class="flex flex-1  flex-col  border-2 border-shark-950 lg:px-8 lg:py-12 rounded-2xl py-10 px-4 ">
          <p class="text-shark-950 text-2xl text-center font-bold ">How I Work</p>
          <div class="space-y-5 text-sm lg:text-lg">
            <div class="pt-10  text-shark-950 ">
              <p>You type what's on your mind</p>
              <p>I'll listen and respond like a friend</p>
            </div>
            <div class="text-sm lg:text-lg ">
              <p class="">I can guide you, support you or share helpful tips</p>
              <p class="">If things feel too heavy, I'll help you figure out what to do next - even connect you to real people if you ask </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="h-screen pt-20 md:pt-0 flex mx-auto w-11/12   space-y-8 flex-col items-center justify-center">
      <div class="flex flex-col space-y-6  items-center justify-center">
        <div>
          <h2 class="text-shark-950  lg:text-4xl text-2xl font-bold">Watch Me at Work</h2>
        </div>
        <div class="flex flex-col  text-center text-shark-950 items-center justify-center text-sm lg:text-lg">
          <p class="">Sometimes it helps to see how it works before you open up.</p>
          <p>Here's a look at what chatting with me feels like.</p>
        </div>
      </div>
      <div class="relative justify-center items-center  lg:hidden flex">
        <img src="@/assets/images/about-7-1.png" class="w-full" alt="chatting-experience-image"/>
        <img  class="absolute left-36 top-1/3" src="@/assets/images/Polygon-1.png" alt="play-button"/>
      </div>
      <div  class="relative justify-center items-center hidden lg:flex">
        <img src="@/assets/images/about-7.png" class="w-full hidden lg:block" alt="chatting-experience-image"/>
        <img  class="absolute left-3/5 top-3/5" src="@/assets/images/Polygon-1.png" alt="play-button"/>
      </div>
  </section>
     <section class="">
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
