import { defineStore } from 'pinia';
import { ref } from 'vue'


export const useRafikeyWebstore = defineStore('rafikeyWebstore', () => {

const collapseSidebarSmall = ref(true);

  const setCollapseSidebarSmall = (val: boolean) =>{
    collapseSidebarSmall.value = val
  }

  return {
    collapseSidebarSmall,
    setCollapseSidebarSmall
  }

})
