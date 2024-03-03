import App from './App.vue'
import './assets/main.css'
import singleSpaVue from 'single-spa-vue'
import {createApp, h} from "vue";
console.log("File Loaded")
import router from './router'
const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
        render() {
            return h(App, {
                props: {
                    // single-spa props are available on the "this" object. Forward them to your component as needed.
                    // https://single-spa.js.org/docs/building-applications#lifecyle-props
                    name: this.name,
                },
            });
        },
    },
    handleInstance: (app) => {
        app.use(router);
    }
});

// const mountVue = () => {
//     const app = createApp(App)
//     app.use(router)
//     app.mount('#app')
// }
//
// mountVue();
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
