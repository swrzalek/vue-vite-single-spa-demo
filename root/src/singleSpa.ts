import { registerApplication, start } from "single-spa"

const spas = {
    app: "@titanbay/app",
}
export function registerSpas() {
    console.log("Registering SPAs")
    // for (let [k, v] of Object.entries(spas)) {
    //     registerApplication({
    //         name: k,
    //         activeWhen: `/${k}`,
    //         app: () => import(/* @vite-ignore */ v)
    //     });
    // }

    // registerApplication({
    //     name: "@vue-mf/navbar",
    //     app: () => System.import("@vue-mf/navbar"),
    //     activeWhen: "/",
    //     customProps: {
    //         githubLink: "https://github.com/vue-microfrontends/root-config",
    //     },
    // });


    registerApplication({
        name: 'app-one',
        activeWhen: `/app`,
        app: () => import(/* @vite-ignore */ 'http://localhost:4101/src/main.ts')
    });
}

export function runSpas() {
    start();
}
