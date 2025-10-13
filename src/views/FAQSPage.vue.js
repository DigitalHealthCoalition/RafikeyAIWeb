import { nextTick, onMounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// const sectionTwo = ref<HTMLDivElement |null>(null)
import 'swiper/css';
import 'swiper/css/navigation';
gsap.registerPlugin(ScrollTrigger);
onMounted(async () => {
    await nextTick();
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: sectionTwo.value,
    //     start: "20% 80%",
    //     end: "top 100",
    //     scrub: 3,
    //     markers: true,
    //     toggleActions: "restart pause resume pause"
    //   },
    // })
    //
    // tl.to(sectionTwo.value, {
    //   x: 1000,
    //   rotation: 360,
    //   duration: 3,
    // })
    //
    // tl.to(sectionTwo.value, {
    //   backgroundColor: "red",
    //   duration: 1
    // })
    // tl.to(sectionTwo.value, {
    //   x: 0,
    //   rotation: 0,
    //   duration: 3
    // })
    //
    // gsap.to(sectionTwo.value, {
    //   scrollTrigger: {
    //     trigger: sectionTwo.value,
    //     start: "20% 80%",
    //     // end: "80% 40%",
    //     scrub: 3,
    //     markers: true,
    //     toggleActions: "restart pause resume pause"
    //   },
    //   x: "50%",
    //   rotation: 360,
    //   duration: 5
    // })
    // gsap.utils.toArray(".panel").forEach((panel, i: number) =>{
    //   ScrollTrigger.create({
    //     trigger: panel as HTMLDivElement,
    //     start: "top top",
    //     pin: true,
    //     pinSpacing: false
    //   })
    // })
    // ScrollTrigger.create({
    //   trigger:  sectionTwo.value,
    //   start: "top top",
    //   end: "+=300px",
    //   pin: true,
    //   // pinSpacing: false
    //
    // })
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['hide-scrollbar']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "h-screen" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "h-full flex justify-center items-center w-2/3 lg:w-1/3 mx-auto" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/under-const.png",
    alt: "uder-construction-image",
});
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-2/3']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-1/3']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
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
