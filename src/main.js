import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import messages from './plugins/locale'
import Qs from 'qs'
import AntPluginGlobal from './plugins/ant-global'

Vue.config.productionTip = false

Vue.use(AntPluginGlobal, {})

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale:
    Qs.parse(location.href.slice(location.href.indexOf('?') + 1)).locale ||
    'zhCN',
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
