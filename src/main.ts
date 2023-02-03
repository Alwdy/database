import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import PdfView from "./components/PdfView.vue"
import TeamPdf from "./components/TeamPdf.vue"
import Vconsole from 'vconsole'

let vConsole = new Vconsole()

const app = createApp(App)
app.component('PdfView', PdfView)
app.component('TeamPdf', TeamPdf)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
