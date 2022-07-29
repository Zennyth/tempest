
import { createApp } from 'vue';
import AppWrapper from '@/AppWrapper.vue';

import primevue from "@/plugins/primevue.js"
import './assets/styles/layout.scss';

import router from '@/router';

router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0);
    next();
});

const app = createApp(AppWrapper)
    .use(primevue)
    .use(router)

app.mount('#app');