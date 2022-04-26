import { createApp } from 'vue';
import App from './App.vue';
import store from './store/todos';

createApp(App).use(store).mount('#app');
