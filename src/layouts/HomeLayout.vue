<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <header-one></header-one>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
          overflowY: 'auto'
        }"
      >
        <router-view class="my-router"></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import HeaderOne from '@/components/header/HeaderOne'
export default {
  name: 'HomeLayout',
  components: {
    [HeaderOne.name]: HeaderOne
  },
  data() {
    return {
      collapsed: false
    }
  }
}
</script>
<style>
#components-layout-demo-custom-trigger {
  height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
</style>
