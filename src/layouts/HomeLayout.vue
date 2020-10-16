<template>
  <div id="user-layout">
    <a-layout>
      <a-layout-header><header-one></header-one></a-layout-header>
      <a-layout class="main">
        <a-layout-content
          ><router-view class="my-router"></router-view
        ></a-layout-content>
      </a-layout>
      <a-layout-footer class="fixed-footer">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import HeaderOne from '@/components/header/HeaderOne'
export default {
  name: 'HomeLayout',
  components: {
    [HeaderOne.name]: HeaderOne
  }
}
</script>

<style lang="less">
#user-layout .main {
  height: calc(100vh - 44px - 44px);
  overflow-y: auto;
}
#user-layout .main .my-router {
  background: rgba(16, 142, 233, 1);
}
#user-layout .fixed-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 44px;
  padding: 0;
  line-height: 44px;
  background: #000;
  color: #fff;
}
#user-layout .ant-layout-header {
  height: auto;
  padding: 0;
  line-height: 0;
  z-index: 1000;
}
#user-layout .ant-layout-content {
  color: #fff;
  height: auto;
}
</style>
