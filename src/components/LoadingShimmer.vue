<script setup lang="ts">
</script>

<template>
  <div>
    <div class="space-y-2">
      <div class="h-6 animate-shimmer bg-gray-200  rounded-lg w-2/5"></div>
      <div class="h-6 animate-shimmer bg-gray-200 w-3/5 rounded-lg"></div>
      <div class="h-6 animate-shimmer bg-gray-200 w-3/4 rounded-lg"></div>

    </div>

  </div>

</template>

<style scoped>
.animate-shimmer {
  background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 37%, #e5e7eb 63%);
  background-size: 80% 400%;
  animation: shimmer 1.4s ease infinite;
}

@keyframes shimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
</style>
