<template>
  <center>
    <h1 class="mainTitle" style="font-size: 160px;">404</h1>
    <h1 class="subTitle">Page Not Found!</h1>
    <br><br>
    <p>
      <a class="moveHome" href="/" style="font-size: 20px;color: #000; text-decoration: none;">메인 페이지로 이동 <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    </p>
  </center>
</template>

<script>

export default {
  name: 'NotFound'
}

</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Julius+Sans+One&family=Noto+Sans+KR:wght@100&family=Poiret+One&family=Sunflower:wght@300&display=swap');

.mainTitle {
  font-family: 'Poiret One', cursive;
}

.subTitle {
  font-family: 'Julius Sans One', sans-serif;
}

.moveHome {
  font-family: 'Noto Sans KR', sans-serif;
}

center {
  margin: 15vw;
}

h1 {
  /*color: var(--border);*/
  font-size: 2em;
}

</style>