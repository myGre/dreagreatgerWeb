<template>
  <div class="login-content">
    <div class="login-form">
      <LoginForm class="login" ref="loginRef"></LoginForm>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
// import SwitchDark from "@/components/SwitchDark/index.vue";
import LoginForm from "./components/LoginForm/index.vue";
</script>

<style scoped lang="scss">
.login-content {
  width: 100vw;
  height: 100vh;
  position: relative;
  // background: url('~@/assets/images/bg.jpg');

  .login-form {
    position: absolute;
    width: 420px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    padding: 50px 40px 45px;
    border-radius: 10px;
    box-shadow: 2px 3px 7px rgb(0 0 0 / 20%);
  }
}
</style>
