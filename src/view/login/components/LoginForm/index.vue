<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名：admin / user">
        <template #prefix>
          <el-icon class="el-input__icon">
            <user />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" placeholder="密码：123456" show-password
        autocomplete="new-password">
        <template #prefix>
          <el-icon class="el-input__icon">
            <lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button round @click="resetForm(loginFormRef)" size="large">重置</el-button>
    <el-button round @click="login(loginFormRef)" size="large" type="primary">
      登录
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { ElMessage, FormInstance } from 'element-plus'
import { loginApi } from '@/api/modules/login';
import { GlobalStore } from "@/stores/index"
import { useRouter } from 'vue-router';
import { Login } from '@/api/interface';
// import md5 from "js-md5";

const router = useRouter()
const globalState = GlobalStore()
const loginFormRef = ref<FormInstance>()

const loginForm = reactive<Login.ReqLoginForm>({
  username: '',
  password: "",
})

const loginRules = reactive({
  password: [{ min: 2, max: 10, message: 'Length should be 2 to 10', trigger: 'blur' }],
  username: [{ min: 2, max: 10, message: 'Length should be 2 to 10', trigger: 'blur' }],

})

const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      const requestLoginForm: Login.ReqLoginForm = {
        username: loginForm.username,
        password: loginForm.password
      }
      loginApi(requestLoginForm).then(res => {
        console.log(res);
        globalState.setToken(res.data!.access_token)
        ElMessage.success("登录成功")
        router.push({ name: "home" })
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
