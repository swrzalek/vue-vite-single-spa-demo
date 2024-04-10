import { registerApplication, start } from "single-spa"
import spas from "./spas.json"

export function registerSpas() {
    for (let [k, v] of Object.entries(spas)) {
        registerApplication({
            name: k,
            activeWhen: `/${k}`,
            app: () => import(/* @vite-ignore */ v),
                customProps: {
                    getToken: () => Math.random().toString(36).substring(2),
                },
        });
    }
}

export function runSpas() {
    start();
}
