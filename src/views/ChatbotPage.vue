<script setup lang="ts">

import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="">
<!--    first slide-->
  <section class="space-y-5 flex py-16 md:py-24 xl:py-30 flex-col items-center">
      <div class="flex flex-col items-center ">
          <h2 class="font-changa-one lg:text-[48px] text-[24px] tracking-[-3%]  text-lightGrayFour">Hello</h2>
          <h2 class="font-changa-one lg:text-[48px] text-[24px] tracking-[-3%] text-lightGrayFour" >I am Rafikey</h2>
      </div>

      <div class="w-3/4 lg:w-2/3 xl:w-1/3" >
        <p class="lg:text-[20px] text-[14px] leading-[120%]  font-urbanist font-bold text-black text-center">I'm here whenever you need someone to talk to - no pressure, no judgement and always private. You can tell me how you're feeling, ask questions or just vent. I've got you.</p>
      </div>
      <div class="w-1/3 lg:w-1/5 flex justify-center items-center">
        <img src="@/assets/images/rafikey-mascot3.svg" alt="chatbot-image" />
      </div>
    </section>


<!--    second slide-->
  <section class="xl:h-screen flex  lg:space-y-4 space-y-4 flex-col items-center justify-center mb-4 md:mb-6 lg:mb-6">
  <div class="lg:flex lg:space-y-0 space-y-16 gap-6 xl:w-9/12 w-11/12  mx-auto">
    <div class="flex flex-1 flex-col lg:px-8 lg:py-12 rounded-2xl py-10 px-4 bg-white border-4 border-gray-300">
          <p class="font-changa-one text-[22px] lg:text-[30px] leading-[32px]  lg:leading-[44px] tracking-[-3%] text-lightGrayFour">💬  Who can use Rafikey?</p>
          <div class="lg:pt-10 pt-4 text-[18px] font-urbanist weight-[600] text-lightGrayFour">
<!--            <p class="">Anyone can use Rafikey if:</p>-->
            <ul class="list-disc ps-8">
              <li>You're aged 18 and above</li>
              <li>Under 18, we recommend using Rafikey with a parent, caregiver, or trusted adult.</li>
              <li>You confirm that you understand and accept the terms of use, if creating account</li>
              <li>You can also access Rafikey anonymously, without a personalised experience.</li>
<!--              <li.</li>-->
            </ul>
          </div>
    </div>
    <div class="flex flex-1 flex-col lg:px-8 lg:py-12 rounded-2xl py-10 px-4 bg-white border-4 border-gray-300">
          <p class="font-changa-one text-[22px] lg:text-[30px] leading-[32px] lg:leading-[44px] tracking-[-3%] text-lightGrayFour whitespace-nowrap"><span class="text-gray-300">📁</span> What you should not do</p>
          <div class="lg:pt-10 pt-4 text-[18px] font-urbanist weight-[600] text-lightGrayFour">
            <ul class="list-disc ps-8">
              <li>Use Rafikey to harm, harass, or mislead others</li>
              <li>Share false or dangerous information</li>
              <li>Try to access or misuse the platform’s systems or data</li>
              <li>Try to give Rafikey genuine response when prompt, to make the most out of Rafiikey.</li>
            </ul>
          </div>
        </div>
    </div>
  </section>

    <!--    third slide-->
  <section class="mt-6 md:mt-10 lg:mt-10 mb-10 md:mb-16 lg:mb-32">
      <div class="flex flex-1 flex-col border-4  bg-white border-4 border-gray-300 lg:px-8 lg:py-12 rounded-2xl py-10 px-4 w-3/4 mx-auto items-center">
        <p class="font-changa-one text-[22px] lg:text-[30px] leading-[32px] lg:leading-[44px] tracking-[-3%] text-lightGrayFour flex items-center gap-2">
          <span class="text-gray-300">&#128274;</span> Your Privacy Comes First
        </p>
        <div class="lg:pt-10 pt-4 text-[18px] font-urbanist weight-[600] text-lightGrayFour w-full">
          <p class="font-outfit leading-[24px] lg:leading-[32px] text-[16px] lg:text-[20px]">
            Rafikey protects your privacy. We do not collect personal data unless you choose to share it for a
            more personalized experience. If you feel unsafe or experience abuse, Rafikey can help you find support,
            but we encourage you to speak to a trusted adult immediately.
          </p>
        </div>
      </div>
    </section>


  <section class="xl:h-screen flex mx-auto w-11/12 pt-6 md:pt-8 lg:pt-0 space-y-8 flex-col items-center justify-center">
      <div class="flex flex-col space-y-6  items-center justify-center">
        <div>
          <h2 class="text- lightGrayFour  text-[24px] lg:text-[36px] tracking-[-3%]  leading-[32px] lg:leading-[74px] font-changa-one">Watch Rafikey at Work </h2>
        </div>
        <div class="w-2/3 flex flex-col  text-center text-shark-950 items-center justify-center ">
          <p class="font-urbanist weight-[600] text-[16px[ lg:text-[18px] font-semibold leading-[24px]">Curious how Rafikey works? This video walks you through a real conversation with Rafikey — from asking questions to getting trusted information and finding the right service.</p>
        </div>
      </div>
      <!--      video-->

      <div class="lg:hidden flex w-11/12 p-3 pb-8 bg-darkgray justify-center rounded-2xl items-center">
        <video class="w-full rounded-lg" controls preload="metadata" playsinline>
          <source src="@/assets/video/rafikey-walkthrough.webm" type="video/webm">
          <source src="@/assets/video/rafikey-walkthrough.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="hidden lg:flex w-3/4 h-3/4 p-6 bg-darkgray justify-center rounded-2xl items-center">
        <video class="w-full rounded-lg" controls preload="metadata" playsinline>
          <source src="@/assets/video/rafikey-walkthrough.webm" type="video/webm">
          <source src="@/assets/video/rafikey-walkthrough.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
  </section>

  <section class="pt-16 md:pt-20 lg:pt-12">
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
