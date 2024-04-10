import App from './App.vue'
import './assets/main.css'
import singleSpaVue from 'single-spa-vue'
import {createApp, h} from "vue";
import router from './router'

const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
        render() {
            return h(App, {
                props: {
                    name: this.name,
                    getToken: this.getToken,
                },
            });
        },
    },
    handleInstance: (app) => {
        app.use(router);
    }
});

const mountVue = () => {
    const app = createApp(App)
    app.use(router)
    app.mount('#app')
}


if (import.meta.env.VITE_MODE === 'dev') {
    mountVue();
}

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;


