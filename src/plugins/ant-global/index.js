import {
  Row,
  Col,
  Button,
  Layout,
  Icon,
  ConfigProvider,
  DatePicker
} from 'ant-design-vue'
const antCompanies = [
  Row,
  Col,
  Button,
  Layout,
  Icon,
  ConfigProvider,
  DatePicker
]
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2132156_6bndexmwsgy.js'
})
export default {
  install(Vue) {
    Vue.component('IconFont', IconFont)
    antCompanies.forEach(component => {
      Vue.use(component)
    })
  }
}
