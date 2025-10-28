import { onMounted } from 'vue';
import * as L from 'leaflet';
onMounted(() => {
    const map = L.map('map').setView([-1.286389, 36.817223], 7); // Nairobi coords
    // Add the title layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
    }).addTo(map);
    // Add marker and popup
    L.marker([-1.286389, 36.817223])
        .addTo(map)
        .bindPopup('Wellness Hub Clinic<br>123 Health Ave, Nairobi')
        .openPopup();
    // console.log('Map pane', map.getPane)
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "map",
    ...{ class: "h-[70vh] rounded-lg shadow-md flex items-center justify-center" },
});
/** @type {__VLS_StyleScopedClasses['h-[70vh]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
