<template>
  <div class="vue-tempalte">
    <form @submit.prevent="onSubmit">
      <h3>로그인</h3>

      <div class="form-group">
        <label>이메일</label>
        <input type="email" class="form-control form-control-lg" v-model="username" />
      </div>

      <div class="form-group">
        <label>비밀번호</label>
        <input type="password" class="form-control form-control-lg" v-model="password" />
      </div>

      <button type="submit" class="btn btn-success btn-lg btn-block" v-bind:disabled="!isUsernameValid || !password">로그인</button>
      <p class="log" style="margin-top: 10px; color: #36C4D0;">{{ logMessage }}</p>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password" style="margin-right: 10px">비밀번호를 잊어버리셨습니까?</router-link><span style="margin-right: 8px">|</span>
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
import {loginUser, registerUser} from "@/api/auth";
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: ''
    }
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async onSubmit() {
      try {

        const userData = {
          username: this.username,
          password: this.password,
        };
        console.log(userData);
        console.log('여까지 오자');
        const response = await loginUser(userData);
        console.log(response.data);
        console.log(response.status);
        //await this.$store.dispatch('LOGIN', userData);
        const email = this.username;
        console.log('test');
        if( email == "admin@admin.com") {
          alert('관리자.');
        } else {
          alert(email+'님, 환영합니다.');
        }
        // this.logMessage = `${response.data.username}님이 로그인하셨습니다.`
        this.initForm();
        this.$router.push({name: 'main', query: {username: email}});
      } catch (e) {
        alert('회원이 아닙니다.');
        console.log(e)
        this.$router.push('/signup');
        console.log(e);
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '',
          this.password = '',
          this.nickname = ''
    }
  }
}
</script>