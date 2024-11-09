import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Aura from '@primevue/themes/aura'
import { createPinia } from 'pinia';
import router from './router';

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        present: Aura,
    },
})
app.component('Dialog', Dialog)
app.component('InputText', InputText);
app.component('Button', Button);
app.use(createPinia())
app.use(router)

app.mount('#app')
