<template>
  <div class="vue-tempalte">
    <form>
      <h3>로그인</h3>

      <div class="form-group">
        <label>이메일</label>
        <input type="email" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>비밀번호</label>
        <input type="password" class="form-control form-control-lg" />
      </div>

      <button type="submit" class="btn btn-success btn-lg btn-block">로그인</button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password" style="margin-right: 10px">비밀번호를 잊어버리셨습니까?</router-link>
        <router-link to="/signup">회원이 아니신가요?</router-link>
      </p>

<!--      <div class="social-icons">-->
<!--        <ul>-->
<!--          <li><a href="#"><i class="fa fa-google"></i></a></li>-->
<!--          <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
<!--          <li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
<!--        </ul>-->
<!--      </div>-->

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