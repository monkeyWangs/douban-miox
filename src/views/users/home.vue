<template>
  <div class="user-home">
    <h1>您已登录，欢迎： {{username}}，这里是您的主页</h1>
  </div>
</template>
<script>
  import {Component} from 'miox-vue2x-classify'

  @Component
  export default class Detail {
    username = localStorage.getItem('username')
  }
</script>
<style lang="less">
  .user-home {
    width: 960px;
    margin: 0 auto;
  h1 {
    display: inline-block;
    width: 100%;
    font-size: 20px;
    color: #000;
  }
  }
</style>
