<template>
  <div class="hello">
    HelloWorld ! {{msg}} {{now}} 
    <br/>
    <img :src="vueLogoPath" />
  </div>
</template>
  
<script>
import vueLogo from '@/views/demo/assets/images/logo.png'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your First Vue.js App index,',
      now: new Date().toLocaleString(),
      vueLogoPath: vueLogo
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    // 加载数据
    loadData () {
      console.log('load data.')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--  lang="less" -->
<style lang="less" scoped>
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>
