<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'

// const startChatHandler = () => {
//   window.location.href = 'https://chat.askrafikey.com/auth'
// }
</script>

<template>
  <div class="overflow-hidden">
    <section class=" w-full lg:space-y-8  flex items-center  flex-col justify-center">
        <div class="flex justify-center md:pt-24  lg:pt-28 pt-20">
          <h2 class="font-changa-one  text-lightGrayFour text-[24px]  lg:text-[48px] leading-[74px] tracking-[-3%]">About Rafikey</h2>
        </div>
        <div class="xl:w-1/3 w-2/3 mx-auto">
          <p class="text-[14px] lg:text-[20px] leading-[120%] text-center font-urbanist font-bold text-black  tracking-wide">
            Rafikey is a digital companion designed to empower young people with the knowledge, skills, confidence,
            and tools they need to make informed decisions about their health, relationships, and future.
            The platform offers chat, games, and a service referral feature. We believe that every young person deserves access to accurate,
            age-appropriate information delivered in a way that’s relatable, respectful, and rooted in real-life experiences.
          </p>
        </div>
        <div class="lg:flex w-full lg:justify-center">
          <div class="flex justify-center">
            <img src="@/assets/images/macbook-mockup.png" alt="computer-image"/>
          </div>
          <div class="flex justify-center">
            <img src="../assets/images/iphone-mockup.png" alt="phone-image" class="w-40"/>
          </div>
        </div>
    </section>

    <!--    second slide-->
    <section class=" w-full pt-24 md:pt-0">
      <div class="w-full py-8 space-y-20 px-4 md:px-12">
        <div class="flex flex-col space-y-10 justify-center items-center">
          <div>
            <h2 class="font-changa-one text-center lg:text-start text-lightGrayFour text-[24px] w-3/4 md:w-full mx-auto  lg:text-[36px] leading-[34px] lg:leading-[74px] tracking-[-3%]">Powered by DHCK & Partners</h2>
          </div>
          <div class="lg:w-1/2 md:w-3/4 w-full font-urbanist text-[16px] lg:text-[18px] leading-[24px] weight-[600] text-center text-black">
            <p>Rafikey is an initiative of the Digital Health Coalition of Kenya (DHCK), a collaborative network comprising Africa Media Trust (AMT), the Sexual and Reproductive Health and Rights Kenya (SRHR Kenya), Imara TV, LVCT Health, Population Services Kenya (PSK), TIKO, and AYARHEP </p>
          </div>
        </div>
        <div class="flex flex-col space-y-10 justify-center items-center">
          <div>
            <h2 class="font-changa-one text-center lg:text-start text-lightGrayFour text-[24px] w-3/4 md:w-full mx-auto  lg:text-[36px] leading-[34px] lg:leading-[74px] tracking-[-3%]">About DHCK</h2>
          </div>
          <div class="lg:w-1/2 md:w-3/4 w-full font-urbanist text-[16px] lg:text-[18px] leading-[24px] weight-[600] text-center text-black">
            <p>
              The Digital Health Coalition Kenya (DHCK) is a coalition of stakeholders committed to enhancing the sexual and
              reproductive health and Rights (SRHR) of young people in Kenya by accelerating the digital transformation of
              SRHR information and services. To do so most effectively, the DHCK offers a collaborative platform of key donors,
              implementers, and other strategic partners working on adolescents and young people’s SRHR in Kenya.
              The DHCK aims to unite the current fragmented landscape and together work towards achieving Universal
              Health Coverage and SRHR for all young people in Kenya.
            </p>
          </div>
        </div>



        <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-8">
          <div class="lg:w-1/2 flex items-center justify-center">
            <img
              src="@/assets/images/about-2.png"
              alt="Group using laptops"
              class="w-full rounded-2xl h-96 object-cover"
            />
          </div>
          <div class="bg-white border border-black shadow-lg rounded-2xl p-6 xl:p-8 flex-1 flex flex-col justify-center">
            <div class="mb-4 text-left">
              <h2 class="font-changa-one text-[24px] leading-[120%] text-lightGrayFour flex items-center gap-2">
                Principles of the DHCK
              </h2>
              <div class="mt-2 border-t-2 border-gray-300 w-1/3"></div>
            </div>
            <ul class="space-y-2 lg:text-[18px] text-[15px] font-urbanist leading-[28px] list-disc list-inside text-black mb-4 text-left">
              <li><span class="font-bold">Ecosystem approach:</span> A holistic approach to young people’s SRHR and digital health</li>
              <li><span class="font-bold">Principles for digital health:</span> The DHCK anchors the design of all digital health solutions based on the <a href="https://digitalprinciples.org/" target="_blank" class="text-cerise-600 underline">Principles for Digital Development</a></li>
              <li><span class="font-bold">Pleasure Based:</span> An evidence-based, sex-positive, youth-friendly, pleasure-based approach is applied to all digital services.</li>
              <li><span class="font-bold">Quality:</span> Human-centred design and behavioral change communication methodology are fundamental to digital health success.</li>
              <li><span class="font-bold">International standards:</span> The DHCK anchors its vision on the WHO principles and strategy of digital health.</li>
            </ul>
            <div class="font-outfit text-[15px] lg:text-[16px] text-black text-left mt-2">
              <span class="font-bold">Contact info:</span> info@afrimedia.org
            </div>
          </div>
        </div>



      </div>
    </section>

<!--    Third slide-->
    <section class="py-10 lg:py-10 flex items-center justify-center third-slide text-white">
      <div class="w-full  flex items-center flex-col ">
        <div class="py-4 ">
          <p class="text-cerise-600 font-pt-sans-bold text-[20px] leading-[32px]">You're Not Alone</p>
        </div>
        <div class="py-4 w-3/4 lg:w-2/3 xl:w-1/3 mx-auto text-center lg:text-xl text-lg leading-8">
          <p class="font-outfit text-[20px] leading-[32px] opacity-[70%]">Whether you're asking questions, playing to learn, or finding support, we want you to feel confident that your data is handled with care and respect</p>
        </div>
        <div class=" flex justify-center">
          <img class="w-2/5" src="@/assets/images/rafikey-mascot-hero-section.svg" alt="rafikey-image"/>
        </div>
        <div>
          <div class="font-outfit text-center px-2 pb-6 text-[20px] lg:text-[50px]">
            <p><span class="text-cerise-600 font-changa-one">No</span> labels</p>
            <p><span class="text-cerise-600 font-changa-one">No</span> pressure</p>
            <p class="text-cerise-600">Just support</p>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-16 md:pt-20 lg:pt-24">
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
