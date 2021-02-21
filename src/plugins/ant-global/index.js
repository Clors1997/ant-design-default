import {
  Row,
  Col,
  Button,
  Layout,
  Icon,
  ConfigProvider,
  DatePicker,
  Input,
  message,
  Menu,
  Table,
  Divider,
  Tag
} from 'ant-design-vue'
const antCompanies = [
  Row,
  Col,
  Button,
  Layout,
  Icon,
  ConfigProvider,
  DatePicker,
  Input,
  Menu,
  Table,
  Divider,
  Tag
]
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2132156_6bndexmwsgy.js'
})
export default {
  install(Vue) {
    Vue.component('IconFont', IconFont)
    Vue.prototype.$message = message
    antCompanies.forEach(component => {
      Vue.use(component)
    })
  }
}
