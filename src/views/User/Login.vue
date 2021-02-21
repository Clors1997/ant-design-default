<template>
  <div
    class="w-100 bg-main flex align-center justify-center flex-column"
    style="height: 100vh;"
  >
    <h2 class="uname">Example</h2>
    <div class="input-item my-20">
      <a-input
        v-model="login"
        name="user_name"
        placeholder="用户名"
        ref="userNameInput"
      >
        <a-icon slot="prefix" type="user" />
      </a-input>
    </div>
    <div class="input-item mb-20">
      <a-input
        v-model="password"
        type="password"
        placeholder="密码"
        ref="userNameInput"
        v-on:keyup.enter="userLogin"
      >
        <a-icon slot="prefix" type="lock" />
      </a-input>
    </div>
    <div class="input-item">
      <a-button
        class="w-100"
        size="large"
        type="primary"
        @click="userLogin"
        :loading="loading"
        >Login</a-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: '',
      loading: false
    }
  },
  methods: {
    userLogin() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$message.success('Welcome to Example!')
        this.$router.push({ name: 'home', params: {} })
      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
.input-item {
  width: 300px;
}
</style>
