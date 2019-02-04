import Vue from 'vue';
import App from './components/App.vue';
import router from './router';
import './scss/app.scss';

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');