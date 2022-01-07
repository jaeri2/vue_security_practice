<template>
  <div class="vue-tempalte">
    <form>
      <h3>회원가입</h3>

      <div class="form-group">
        <label>이메일</label>
        <input type="email" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>비밀번호</label>
        <input type="password" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>닉네임</label>
        <input type="text" class="form-control form-control-lg"/>
      </div>

      <button type="submit" class="btn btn-success btn-lg btn-block">회원가입</button>

      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{name: 'login'}">이미 가입된 회원이신가요?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>