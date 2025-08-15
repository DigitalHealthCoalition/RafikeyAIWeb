<script setup lang="ts">

import NavBar from '@/components/NavBar.vue'


const askRafikeyHandler = () => {
  window.location.href = 'https://rafikeyaichatbot-frontend.onrender.com/auth'
}
</script>

<template>
  <div class="h-screen  relative ">
    <NavBar />
    <div class="fixed bottom-0  left-0 right-0   z-50 flex justify-center items-center space-x-4 p-4 ">
      <div class="w-[298px]  h-[69px] bg-darkgray rounded-full">
        <div class="h-full flex w-full justify-between items-center px-[26px] cursor-pointer" @click="askRafikeyHandler" >
          <div>
            <span class="text-white font-outfit text-[14px]">Ask Rafikey</span>
          </div>
          <div class="bg-lightGrayOne rounded-full h-8 w-8 flex justify-center items-center">
            <span class="material-icons-outlined text-shark-950">arrow_upward</span>
          </div>
        </div>
      </div>
    </div>


    <RouterView #default="{ Component, route}">
      <template v-if="Component">
        <component :is="Component" :key="route.fullPath"/>

      </template>

    </RouterView>

  </div>
</template>

<style scoped>

</style>
