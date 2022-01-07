<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
<!--        <a class="navbar-brand float-left" href="/" target="_blank">-->
<!--          PINCAR-->
<!--        </a>-->
        <router-link class="nav-link pr-3" to="/" style="font-size: 24px; color: #000; font-weight: bold">PINCAR</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login" style="color: #000">로그인</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn" to="/signup" style="color: #000">회원가입</router-link>
          </li>
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
  </div>
</template>