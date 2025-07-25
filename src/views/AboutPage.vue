<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="h-screen w-full space-y-20  md:space-y-0">
    <section class="h-screen flex items-center justify-center w-full mx-auto">
      <div class="h-screen w-full lg:space-y-8  flex items-center  flex-col justify-center">
        <div class="flex justify-center pt-60 md:pt-0">
          <h2 class="text-deep-cove-950 font-extrabold lg:!text-6xl text-2xl">About Rafikey</h2>
        </div>
        <div class="xl:w-1/3 w-2/3 mx-auto">
          <p class="lg:text-xl text-sm text-center text-black  tracking-wide">
            We know life can feel overwhelming sometimes - whether it's stress, emotions,
            relationships, school pressure, or just needing someone to talk to. That's why Rafikey
            exists, to support young people like you with tools, guidance, and a private space to
            express yourself.
          </p>
        </div>
        <div class="lg:flex w-full lg:justify-center">
          <div class="flex justify-center">
            <img src="@/assets/images/computer.png" alt="computer-image"/>
          </div>
          <div class="flex justify-center">
            <img src="@/assets/images/phone.png" alt="phone-image" class="w-40"/>
          </div>
        </div>
        <div class="flex w-full justify-center">
          <div class="xl:w-1/6 lg:w-1/4  w-1/2 bg-darkgray rounded-full flex justify-between p-3">
            <div>
              <span class="text-white">Ask Rafikey</span>
            </div>
            <div class="bg-stone-200 rounded-full h-8 w-8 flex justify-center items-center">
              <span class="material-icons-outlined text-shark-950">arrow_upward</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--    second slide-->
    <section class="h-screen w-full pt-24 md:pt-0">
      <div class="w-full h-screen  py-8 px-4 md:px-12">
        <div class="max-w-6xl mx-auto relative lg:right-10 xl:left-0">

          <!-- Image: takes 3/4 width, aligned to the right -->
          <div class="xl:w-3/5  lg:w-1/2 h-96 w-full lg:ml-auto">
            <img
              src="@/assets/images/about-2.png"
              alt="Group using laptops"
              class="w-full rounded-2xl lg:h-96 h--0 object-cover"
            />
          </div>

          <div
            class="bg-white border border-indigo-200 shadow-lg rounded-2xl lg:p-6 xl:p-8  p-8 w-full xl:w-[48%]  lg:w-[52%] absolute md:top-96 top-48 lg:top-6 lg:left-20 xl:-left-10"
          >
            <div class="mb-4 text-center">
              <div class="text-2xl">🧠</div>
              <h2 class="text-xl font-bold text-indigo-900">What We Offer</h2>
              <div class="mt-2 border-t-2 border-gray-300 w-1/3 mx-auto"></div>
            </div>
            <ul class="space-y-4  text-gray-800 text-base leading-relaxed list-disc list-inside">
              <li>
                A <span class="font-bold">supportive chatbot</span> that listens and responds like a friend
              </li>
              <li>
                Helpful <span class="font-bold">resources</span> for mental health, identity, relationships, and more
              </li>
              <li>
                Complete <span class="font-bold">privacy</span> — your data is protected and never shared
              </li>
              <li>
                A place to just be <span class="font-bold">yourself</span> — anonymously or with a username of your choice
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

<!--    Third slide-->
    <section class="lg:h-screen flex items-center justify-center w-full mx-auto">
      <div class="h-screen w-full py-8 px-4 md:px-12 ">
        <div class="max-w-6xl mx-auto relative flex flex-col lg:flex-row items-start lg:items-center">

          <!-- Image Section -->
          <div class="w-full lg:w-3/4">
            <img
              src="@/assets/images/about-3.png"
              alt="Person smiling with Rafikey character"
              class="w-full rounded-2xl object-cover"
            />
          </div>

          <!-- Text Card -->
          <div class="bg-white border border-indigo-200 shadow-md rounded-2xl p-6 md:p-8 w-full lg:w-[48%] absolute md:top-96 top-48 lg:top-10 lg:right-0 lg:translate-x-6 z-10">
            <div class="mb-4 text-center">
              <div class="text-2xl">🙌</div>
              <h2 class="text-xl font-bold text-indigo-900">Why We Exist</h2>
              <div class="mt-2 border-t-2 border-gray-300 w-1/3 mx-auto"></div>
            </div>
            <ul class="space-y-4 xl:space-y-8 text-gray-800 text-base leading-relaxed list-disc list-inside">
              <li>Everyone deserves a space to feel heard.</li>
              <li>Not everyone has someone to talk to.</li>
              <li>Your voice matters and should be respected.</li>
              <li>
                Support should always be private, non-judgmental, available anytime,
                and youth-friendly.
              </li>
            </ul>
          </div>

        </div>
      </div>

    </section>

<!--    Fourth slide-->
    <section class="h-screen flex items-center justify-center third-slide text-white">
      <div class="h-screen w-full lg:space-y-8  space-y-10 flex items-center flex-col justify-center">
        <div class="">
          <p class="text-cerise-600 font-bold text-xl">You're Not Alone</p>
        </div>
        <div class="lg:w-1/3 w-2/3 mx-auto text-center lg:text-xl text-lg leading-8">
          <p>You don't need to have all the answers. You don't have to go through anything alone. Rafikey is your space -  whether you're feeling anxious, confused, down or just need to talk things through.</p>
        </div>
        <div class="xl:w-3/4 lg:w-1/4 w-1/4 flex justify-center">
          <img src="@/assets/images/about-4.png" alt="rafikey-image"/>
        </div>
        <div>
          <h2 class="lg:text-6xl text-lg font-bold">No labels. No pressure. Just support.</h2>
        </div>
        <div>
          <button class="btn btn-sm btn-primary  border-none py-8 px-10 bg-casablanca-300 rounded-lg flex items-center space-x-2">
            <span class="text-xl">Start Chat</span>
          </button>
        </div>

      </div>
    </section>
<!--fifth slide-->
    <section class="h-screen flex items-center justify-center">
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
.third-slide {
  background-color: #0C0011;
}
</style>
