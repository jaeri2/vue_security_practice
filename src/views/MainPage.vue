<template>
  <div>
    <div class="main list-container contents">
      <template v-if="this.$route.query.username == 'admin@admin.com'">
        <h1 class="page-header">관리자 페이지</h1>
      </template>
      <template v-else>
        <h1 class="page-header">회원전용 페이지</h1>
      </template>
<!--      <LoadingSpinner v-if="isLoading"></LoadingSpinner>-->
<!--      <ul v-else>-->
<!--        <PostListItem-->
<!--            v-for="postItem in postItems"-->
<!--            :key="postItem._id"-->
<!--            :postItem="postItem"-->
<!--            @refresh="fetchData"-->
<!--        ></PostListItem>-->
<!--      </ul>-->
    </div>
<!--    <router-link to="/add" class="create-button">-->
<!--      <ion-icon name="add-outline"></ion-icon>-->
<!--    </router-link>-->
  </div>
</template>

<script>
// import PostListItem from '@/components/posts/PostListItem.vue';
// import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/posts';
export default {
  // components: {
  //   PostListItem,
  //   LoadingSpinner,
  // },
  data() {
    return {
      // postItems: [],
      isLoading: false,
    };
  },
  methods: {
    // async fetchData() {
    //   this.isLoading = true;
    //   const { data } = await fetchPosts();
    //   this.isLoading = false;
    //   this.postItems = data.posts;
    // },
  },
  created() {
    // this.fetchData();
  },
};
</script>

<style></style>