<template>
  <div class="header">
    <input type="checkbox" id="toggler" ref="menu-toggler" />
    <label class="menu-toggler" for="toggler" v-if="!is_desktop">
      <div class="hamburger-container">
        <span></span>
        <span></span>
      </div>
    </label>

    <ul class="menu" v-if="is_desktop">
      <li
        v-for="(item, key) in menuData"
        :key="key"
        :style="item.active ? { 'border-bottom-color': '#fff' } : {}"
        @click="changeMenu(item)"
      >
        {{ item.title }}
      </li>
    </ul>

    <div class="nav-items" v-if="!is_desktop">
      <ul>
        <li
          v-for="(item, key) in menuData"
          :key="key"
          :style="item.active ? { 'border-bottom-color': '#fff' } : {}"
          @click="changeMenu(item)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderOne',
  data() {
    const menuData = this.getMenuData(this.$router.options.routes)
    console.log(menuData)
    return {
      is_desktop: true,
      screenWidth: 0,
      menuData
    }
  },
  watch: {
    screenWidth(val) {
      this.is_desktop = val > 800
    },
    $route: {
      handler: function(val) {
        this.menuData.forEach(item => {
          if (val.name == item.name) {
            item.active = true
          } else {
            item.active = false
          }
        })
      },
      immediate: true
    }
  },
  mounted() {
    console.log(this.$route)
    this.screenWidth = document.body.clientWidth
    // 监听窗口大小
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
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
              menuData.push({
                title: subItem.meta.title,
                name: subItem.name,
                active: false
              })
            }
          })
        }
      })
      return menuData
    },
    changeMenu(item) {
      this.$router.push({ name: item.name })
      this.$refs['menu-toggler'].checked = false
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #000;
  height: 44px;
  padding: 0 18px;
  position: relative;
}
.box {
  width: 100px;
  height: 100px;
  background-color: #000;
}
.menu-toggler {
  float: left;
  width: 20px;
  height: 20px;
}
#toggler:checked + label .hamburger-container span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 4px;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}
#toggler:checked + label .hamburger-container span:nth-of-type(2) {
  transform: rotate(-45deg);
  top: -4px;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}
#toggler {
  display: none;
}
.hamburger-container {
  display: block;
  width: 20px;
  height: 20px;
  position: relative;
  top: 16px;
}
.hamburger-container span {
  display: block;
  height: 1px;
  background-color: #fff;
  position: relative;
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
  top: 0;
}
.hamburger-container span:nth-of-type(2) {
  margin-top: 7px;
}
.nav-items {
  background-color: rgba(0, 0, 0, 0.82);
  width: 100%;
  height: calc(100vh - 88px);
  position: absolute;
  top: 44px;
  left: 0;
  transform: scaleY(0);
  opacity: 0;
  transition: transform 0.3s ease-in-out 0.3s, opacity 0.3s ease-in-out 0.3s;
  transform-origin: 50% 0;
}
#toggler:checked ~ .nav-items {
  transform: scaleY(1);
  opacity: 1;
}
.nav-items ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
}
.nav-items ul li {
  height: 40px;
  color: #fff;
  line-height: 40px;
  font-size: 30px;
  cursor: pointer;
  border-bottom: 1px solid;
  border-bottom-color: rgba(0, 0, 0, 0.82);
}
.nav-items ul li:hover {
  border-bottom-color: #fff;
}
.menu {
  display: block;
  position: relative;
  width: 800px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
}
.menu li {
  color: #fff;
  font-size: 20px;
  margin: 0 10px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  border-bottom: 1px solid;
  border-bottom-color: #000;
  transition: all 0.3s ease-in-out;
}
.menu li:hover {
  border-bottom-color: #fff;
}
</style>
