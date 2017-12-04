<template>
  <div class="user-login">
    <div class="header">
      <img src="//img.souche.com/f2e/76eba1a1ef5ddba7e23727fc4da44017.png" width="215">
    </div>
    <h1>登录豆瓣</h1>
    <div class="form">
      <input placeholder="账号" v-model="username">
      <input placeholder="密码" type="password" v-model="password">
      <w-button @click="doLogin">登录</w-button>
    </div>
  </div>
</template>
<script>
  import {Component} from 'miox-vue2x-classify'

  @Component
  export default class Detail {
    username = ''
    password = ''

    doLogin () {
      localStorage.setItem('username', this.username)
      this.$router.push('/')
    }
  }
</script>
<style lang="less">
.user-login {
  width: 960px;
  margin: 0 auto;
  .form{
    input {
      display: block;
      height: 30px;
      outline: none;
      width: 300px;
      border-radius: 4px;
    }
  }
}
</style>
