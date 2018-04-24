<template>
  <div class="main-wrap">
    <div class="ms-main">
      <el-form :model="formModel" :rules="rules" ref="form01Form" label-width="0px">
        <div class="ms-title">Identity Information</div>
        <el-form-item prop="IDDocType">
          <el-select style="width:100%" v-model="formModel.IDDocType" placeholder="Please select IDDocType">
            <el-option v-for="item in IDDocTypeOpts" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="IDDocNo">
          <el-input v-model="formModel.IDDocNo" placeholder="Please input IDDocNo"></el-input>
        </el-form-item>
        <el-form-item prop="Surname">
          <el-input v-model="formModel.Surname" placeholder="Please input Surname"></el-input>
        </el-form-item>
        <el-form-item prop="GivenName">
          <el-input v-model="formModel.GivenName" placeholder="Please input GivenName"></el-input>
        </el-form-item>
        <el-form-item prop="DateOfBirth">
          <el-date-picker v-model="formModel.DateOfBirth" type="date" placeholder="Select the Birthday" style="width:100%">
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="Gender">
          <el-radio v-model="formModel.Gender" label="0">Male</el-radio>
          <el-radio v-model="formModel.Gender" label="1">Female</el-radio>
        </el-form-item>
        <div class="btn-next">
          <el-button style="width:100%" type="primary" @click="submitForm()" :loading="isBtnLoading">Next</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
  
<script>
import { createOmniApplication } from '@/views/omni/apis'
export default {
  data () {
    return {
      formModel: {
        IDDocType: 'HKID',
        IDDocNo: '',
        Surname: '',
        GivenName: '',
        DateOfBirth: '',
        Gender: '0'
      },
      rules: {
        IDDocNo: [{ required: true, message: 'Please input the Doc No.', trigger: 'blur' }],
        Surname: [{ required: true, message: 'Please input the Surname.', trigger: 'blur' }],
        GivenName: [{ required: true, message: 'Please input the GivenName.', trigger: 'blur' }],
        DateOfBirth: [{ required: true, message: 'Please input the Birthday.', trigger: 'blur' }]
      },
      isBtnLoading: false,
      IDDocTypeOpts: [{
        value: 'HKID',
        label: 'HKID'
      }, {
        value: 'Passport',
        label: 'Passport'
      }
      ]
    }
  },
  mounted () {
  },
  methods: {
    // call the api methods to retrieve data from api or submit data to api
    submitForm () {
      const self = this
      self.isBtnLoading = true
      const param = self.formModel
      createOmniApplication(param).then(function (res) {
        self.isBtnLoading = false
        console.log('return data:' + res)
        self.$router.push({ name: 'form02', params: { data: res } })
      }).catch(function (error) {
        self.isBtnLoading = false
        console.log(error.message)
      })
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