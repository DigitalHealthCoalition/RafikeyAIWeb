import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'web-page',
      component: () => import('@/views/WebPage.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: ()=> import('@/views/HomePage.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutPage.vue'),
        },
        {
          path: '/chatbot',
          name: 'chatbot',
          component: ()=>import('@/views/ChatbotPage.vue'),
        },
        {
          path: '/contacts',
          name: 'contacts',
          component: ()=> import('@/views/ContactPage.vue'),
        },
        {
          path: '/faqs',
          name: 'faqs',
          component: ()=> import('@/views/FAQSPage.vue'),
        }
      ]
    }
  ],
})

export default router
