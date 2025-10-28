<script setup lang="ts">

import { onMounted } from 'vue'
import * as L from 'leaflet'

onMounted(() => {
  const map = L.map('map').setView([-1.286389, 36.817223], 7) // Nairobi coords

  // Add the title layer from OpenStreetMap

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
  }).addTo(map)

  // Add marker and popup
  L.marker([-1.286389, 36.817223])
    .addTo(map)
    .bindPopup('Wellness Hub Clinic<br>123 Health Ave, Nairobi')
    .openPopup()

  // console.log('Map pane', map.getPane)
})
</script>

<template>
  <div
    id="map"
    class="h-[70vh] rounded-lg shadow-md flex items-center justify-center"
  ></div>

</template>

<style scoped>
#map {
  z-index: 0 !important;
}
</style>
