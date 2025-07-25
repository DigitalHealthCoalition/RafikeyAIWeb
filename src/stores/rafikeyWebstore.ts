import { defineStore } from 'pinia';
import { ref } from 'vue'


export const useRafikeyWebstore = defineStore('rafikeyWebstore', () => {

const collapseSidebarSmall = ref(true);

  const setCollapseSidebarSmall = (val: boolean) =>{
    collapseSidebarSmall.value = val
    console.log("Collapse sidebar small set to:", val)
  }

  return {
    collapseSidebarSmall,
    setCollapseSidebarSmall
  }

})
