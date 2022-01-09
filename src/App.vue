<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <template v-if="this.$route.name == 'notFound'">
      <NotFoundPage></NotFoundPage>
    </template>
    <template v-else>
      <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
        <div class="container">
          <!--        <a class="navbar-brand float-left" href="/" target="_blank">-->
          <!--          PINCAR-->
          <!--        </a>-->
          <template v-if="this.$route.query.username == 'admin@admin.com'">
            <router-link class="nav-link pr-3" to="/" style="font-size: 24px; color: #000; font-weight: bold">ADMIN</router-link>
          </template>
          <template v-else>
            <router-link class="nav-link pr-3" to="/" style="font-size: 24px; color: #000; font-weight: bold">PINCAR</router-link>
          </template>
          <ul class="nav navbar-nav flex-row float-right">
            <template v-if="this.$route.name == 'main' && this.$route.query.username != 'admin@admin.com'">
              <p style="margin-right: 20px; font-weight: bold; color: #B4B9C3">{{ this.$route.query.username }} <i class="fa fa-bell" aria-hidden="true" style="color:#000"></i></p>
              <a href="javascript:;" @click="logoutUser" class="logout-button" style="color: #000">로그아웃</a>
            </template>
            <template v-else-if="this.$route.name == 'main' && this.$route.query.username == 'admin@admin.com'">
              <p style="margin-right: 20px; font-weight: bold; color: #000">관리자 <i class="fa fa-lock" aria-hidden="true"></i></p>
              <a href="javascript:;" @click="logoutUser" class="logout-button" style="color: #000">로그아웃</a>
            </template>
            <template v-else>
              <li class="nav-item">
                <router-link class="nav-link pr-3" to="/login" style="color: #000">로그인</router-link>
              </li>
              <li class="nav-item">
                <router-link class="btn" to="/signup" style="color: #000">회원가입</router-link>
              </li>
            </template>
          </ul>
        </div>
      </nav>

      <!-- Main -->
      <div class="App">
        <div class="vertical-center">
          <div class="inner-block">
            <router-view />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
// import { deleteCookie } from '../../utils/cookies';

import NotFoundPage from "@/views/NotFoundPage";
export default {
  name: 'AppHeader',
  components: {NotFoundPage},
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    }
  },
  // created() {
  //   console.log(this.$route.query.username);
  // },
  methods: {
    logoutUser() {
      if(confirm('로그아웃을 진행할까요?')) {
        this.$store.commit('clearUsername');
        this.$store.commit('clearToken');
        // deleteCookie('til_auth');
        // deleteCookie('til_user');
        this.$router.push('/login');
      } else {}
    },
  }
};
</script>