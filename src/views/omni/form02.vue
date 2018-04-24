<template>
  <div class="main-wrap">
    <div class="ms-main">
      <div class="ms-title">Identity Information</div>
      <div class="ms-title">RefID:{{ this.$route.params.data }}</div>
      <div class="btn-next">
        <el-button style="width:100%" type="primary" @click="goBack()" :loading="isBtnLoading">Go Back</el-button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data () {
    return {
      isBtnLoading: false
    }
  },
  mounted () {
  },
  methods: {
    // call the api methods to retrieve data from api or submit data to api
    goBack () {
      const self = this
      self.$router.push('form01')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.main-wrap {
  box-sizing: border-box;
  position: absolute;
  /* left: 50%; */
  /* top: 50%; */
  margin: 10px 0 0 0px;
  width: 100%;
  /* height: 100%; */
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  /* margin: 180px auto; */
  min-width: 360px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.ms-title {
  margin: -30px auto 40px auto;
  text-align: center;
  font-size: 30px;
  color: #505458;
}
.ms-main {
  padding-top: 0px;
  /* position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 160px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #fff; */
}
.btn-next {
  width: 100%;
}
</style>