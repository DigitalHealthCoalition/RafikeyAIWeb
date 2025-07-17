<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="h-screen w-full snap-y snap-mandatory overflow-y-scroll hide-scrollbar">
    <section class="h-screen snap-start flex items-center justify-center w-11/12 mx-auto">
      <div class="h-screen w-full space-y-8 flex flex-col justify-center">
        <div class="flex justify-center">
          <h2 class="text-deep-cove-950 font-extrabold !text-6xl">About Rafikey</h2>
        </div>
        <div class="w-4/12 mx-auto">
          <p class="text-xl text-center text-black  tracking-wide">
            We know life can feel overwhelming sometimes - whether it's stress, emotions,
            relationships, school pressure, or just needing someone to talk to. That's why Rafikey
            exists, to support young people like you with tools, guidance, and a private space to
            express yourself.
          </p>
        </div>
        <div class="flex items-center w-11/12 justify-center">
          <img src="@/assets/images/about-1.png" alt="rafiket-chatbot-snap-image" class="h-96" />
        </div>
        <div class="flex justify-center">
          <div class="w-1/6 bg-darkgray rounded-full flex justify-between p-3">
            <div><span class="text-white">Ask Rafikey</span></div>
            <div class="bg-stone-200 rounded-full h-8 w-8 flex justify-center items-center">
              <span class="material-icons-outlined text-shark-950">arrow_upward</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--    second slide-->
    <section class="h-screen snap-start w-full">
      <div class="h-screen flex flex-col space-y-20 items-center justify-center">
        <div class="flex flex-col space-y-8 items-center">
          <div>
            <h2 class="text-deep-cove-950 font-extrabold !text-5xl">
              Your private space to talk, vent or explore your feelings.
            </h2>
          </div>
          <div class="flex flex-col text-xl font-normal justify-center w-10/12 mx-auto">
            <p class="text-center">
              Our chatbot is here 24/7 to listen, guide and support you - just like a caring friend
              would.
            </p>
            <p class="text-center">
              Whether you're feeling anxious, stressed, confused or just need to talk something out,
              you can start typing and let it out here.
            </p>
          </div>
        </div>
        <div class="mx-auto w-11/12">
          <!--          <img src="@/assets/images/about-2.png" alt="rafiket-chatbot-snap-image" class="h-96" />-->
          <div class="relative w-full flex justify-center">
            <div
              class="absolute left-48 top-8 border-black z-10 border-2 rounded-3xl bg-white p-10 space-y-6"
            >
              <!--            <div>🧠</div>-->
              <p class="text-2xl text-shark-950 font-bold text-center">What We Offer</p>
              <div class="border-b border-black w-2/5 mx-auto"></div>
              <ul class="list-disc space-y-10 text-xl">
                <li>
                  <span class="text-shark-950 text-semibold"
                    >support chatbot that listens and responds like a friend</span
                  >
                </li>
                <li>
                  Helpful <span>resources</span> for mental health, identity, relationships and
                  more.
                </li>
                <li>Complete <span>privacy -</span> your data is protected and never shared.</li>
                <li>
                  A place to just <span>be yourself -</span>anonymously or with a username of your
                  choice.
                </li>
              </ul>
            </div>
            <div class="pt-20 flex ps-96">
              <img src="@/assets/images/about-2.png" alt="young-people-image" />
            </div>
          </div>
        </div>
      </div>
    </section>

<!--    Third slide-->
    <section class="h-screen snap-start flex items-center justify-center w-11/12 mx-auto">
      <div class="h-screen w-full space-y-8 flex flex-col pt-24">
        <div class="mx-auto w-11/12">
          <!--          <img src="@/assets/images/about-2.png" alt="rafiket-chatbot-snap-image" class="h-96" />-->
          <div class="relative w-full flex justify-center">
            <div class="pe-96">
              <img src="@/assets/images/about-3.png" alt="young-people-image" />
            </div>
            <div
              class="absolute right-32 top-20 border-black z-10 border-2 rounded-3xl bg-white p-10 space-y-6"
            >
              <!--            <div>🧠</div>-->
              <p class="text-2xl text-shark-950 font-bold text-center">What We Offer</p>
              <div  class="border-b border-black w-2/5 mx-auto"></div>
              <ul class="list-disc space-y-6 text-xl">
                <li>
                  <span class="text-shark-950 text-semibold"
                  >support chatbot that listens and responds like a friend</span
                  >
                </li>
                <li>
                  Helpful <span>resources</span> for mental health, identity, relationships and
                  more.
                </li>
                <li>Complete <span>privacy -</span> your data is protected and never shared.</li>
                <li>
                  A place to just <span>be yourself -</span>anonymously or with a username of your
                  choice.
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div class="flex flex-col items-center space-y-6">
          <div>
            <p class="text-cerise-600 text-xl">About Your Privacy</p>
          </div>
          <div>
            <h2 class="text-4xl font-bold">Your Privacy Comes First</h2>
          </div>
          <div class="text-xl space-y-2">
            <p class="ps-4">We follow strict data protection rules (GDPR-complaint), and you control what you share. </p>
            <p class="">You can use Rafikey with a nickname or anonymous username. No ads. No data selling. Just real support</p>
          </div>
        </div>
      </div>
    </section>

<!--    Fourth slide-->
    <section class="h-screen snap-start flex items-center justify-center third-slide text-white">
      <div class="h-screen w-full space-y-8 flex items-center flex-col justify-center">
        <div>
          <p class="text-cerise-600 font-bold text-xl">You're Not Alone</p>
        </div>
        <div class="w-1/3 mx-auto text-center text-xl leading-8">
          <p>You don't need to have all the answers. You don't have to go through anything alone. Rafikey is your space -  whether you're feeling anxious, confused, down or just need to talk things through.</p>
        </div>
        <div>
          <img src="@/assets/images/about-4.png" alt="rrafikey-image"/>
        </div>
        <div>
          <h2 class="text-6xl font-bold">No labels. No pressure. Just support.</h2>
        </div>
        <div>
          <button class="btn btn-sm btn-primary  border-none py-8 px-10 bg-casablanca-300 rounded-lg flex items-center space-x-2">
            <span class="text-xl">Start Chat</span>
          </button>
        </div>

      </div>
    </section>
<!--fith slide-->
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
.third-slide {
  background-color: #0C0011;
}
</style>
