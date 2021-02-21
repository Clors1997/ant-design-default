<template>
  <div>
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :selectedKeys="[active]">
      <a-menu-item
        v-for="(item, key) in menuData"
        :key="key"
        @click="changeMenu(item)"
      >
        <a-icon :type="item.icon" />
        <span>{{ item.title }}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'HeaderOne',
  data() {
    const menuData = this.getMenuData(this.$router.options.routes)
    console.log(menuData)
    return {
      menuData,
      active: 0
    }
  },
  watch: {
    $route: {
      handler: function(val) {
        this.menuData.forEach((item, key) => {
          if (val.name == item.name) {
            this.active = key
          }
        })
      },
      immediate: true
    }
  },
  methods: {
    getMenuData(routes) {
      let menuData = []
      routes.forEach(item => {
        if (item.path == '/') {
          const newItem = { ...item }
          newItem.children.forEach(subItem => {
            if (subItem.showInMenu) {
              console.log(subItem.meta.icon)
              menuData.push({
                title: subItem.meta.title,
                name: subItem.name,
                icon: subItem.meta.icon
              })
            }
          })
        }
      })
      return menuData
    },
    changeMenu(item) {
      if (this.$route.name != item.name) {
        this.$router.push({ name: item.name })
      }
    }
  }
}
</script>

<style scoped>
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
