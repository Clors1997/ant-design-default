<template>
  <div class="home">
    <!-- icon-font在线 -->
    <a-row type="flex" :gutter="[24, 24]" justify="center">
      <a-col :xs="12" :sm="12"
        ><icon-font class="hi-icon" type="icon-hi"></icon-font
      ></a-col>
    </a-row>
    <a-row type="flex" :gutter="[24, 24]" justify="center">
      <a-col :xs="12" :sm="12"
        ><a-date-picker :defaultValue="moment()"></a-date-picker
      ></a-col>
    </a-row>
    <a-row type="flex" :gutter="[8, 24]">
      <a-col
        :xs="{ span: 12 }"
        :sm="{ span: 9, offset: 3 }"
        :md="{ span: 3, offset: 9 }"
        :lg="{ span: 2, offset: 10 }"
        >{{ $t('message.hello') }}</a-col
      >
      <a-col
        :xs="{ span: 12 }"
        :sm="{ span: 9 }"
        :md="{ span: 3 }"
        :lg="{ span: 2 }"
        >{{ $store.state.demoService.vuexdemo }}</a-col
      >
    </a-row>
    <!-- <vue-tabs-swiper touch-animation :threshold="50">
      <div tab-label="热点">热点</div>
      <div tab-label="发现">发现</div>
      <div tab-label="关注">关注</div>
    </vue-tabs-swiper> -->
    <!-- icon-font 本地组件化 -->
    <!-- <Logo class="other-icon" /> -->
  </div>
</template>

<script>
import VueTabsSwiper from 'vue-tabs-swiper'
import moment from 'moment'
import { test } from '@/api/test.js'
import { debounce } from 'lodash'
// import Logo from '@/assets/ic_others.svg'
export default {
  name: 'Home',
  components: {
    // Logo,
    [VueTabsSwiper.name]: VueTabsSwiper
  },
  mounted() {
    //本地请求演示
    test()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    moment,
    testDebounce: debounce(() => {
      console.log(111)
    }, 500)
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 4000px;
  padding: 12px;
  width: 100%;
  text-align: center;
  .hi-icon {
    font-size: 40px;
  }
}
</style>
