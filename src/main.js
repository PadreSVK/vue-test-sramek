import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.filter("stringShortener", (stringToShort, maxLength = 10) => {
    if (stringToShort.length > maxLength + 3) {
        return `${stringToShort.substring(0, maxLength)}...`
    }
    else {
        return stringToShort
    }
})

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')