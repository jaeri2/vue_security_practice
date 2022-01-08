// 학습노트 관련 API
import { posts } from './index';

// 학습노트 목록 조회 api
function fetchPosts() {
    return posts.get('/');
}

// 학습노트 게시물 1개 조회 api
function fetchPost(postId) {
    return posts.get(postId);
}

// 학습노트 추가 api
function createPost(postData) {
    return posts.post('/', postData);
}

// 학습노트 삭제 api
function deletePost(postId) {
    return posts.delete(postId);
}

// 학습노트 수정 api
function updatePost(postId, postData) {
    return posts.put(postId, postData);
}

export { fetchPosts, createPost, deletePost, updatePost, fetchPost };