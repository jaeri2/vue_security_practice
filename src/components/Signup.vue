<template>
  <div class="vue-tempalte">
    <form @submit.prevent="Onsubmit">
      <h3>회원가입</h3>

      <div class="form-group">
        <label>이메일</label>
        <input type="email" class="form-control form-control-lg" v-model="username" />
      </div>

      <div class="form-group">
        <label>비밀번호</label>
        <input type="password" class="form-control form-control-lg" v-model="password" />
      </div>

      <div class="form-group">
        <label>닉네임</label>
        <input type="text" class="form-control form-control-lg" v-model="nickname"/>
      </div>

      <button type="submit" class="btn btn-success btn-lg btn-block" v-bind:disabled="!isUsernameValid || !password || !nickname">회원가입</button>
      <p class="log" style="margin-top: 10px; color: #36C4D0;">{{ logMessage }}</p>

      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{name: 'login'}">이미 가입된 회원이신가요?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: ''
    }
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async Onsubmit() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname
      };
      console.log('회원가입이 정상적으로 진행됐습니다.');
      // console.log(this.username, this.password, this.nickname);
      const response = await registerUser(userData);
      console.log(response.data.username);
      this.logMessage = `${response.data.username}님이 가입되었습니다.`
      alert('회원가입이 완료되었습니다.');
      this.$router.push('/login');
      this.initForm();
    },
    initForm() {
      this.username = '',
      this.password = '',
      this.nickname = ''
    }
  }
}
</script>