







import axios from 'axios';
import { setInterceptors } from './common/interceptors';
import store from "@/store/index";


function createInstance() {
    return axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        // headers: {
        //     Authrozation: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYmJiQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDE2NDYzMzh9.NmUHqxe_ADINPkIDjJRkLpY-bPb7UOvYOqpxKiG2mjMt4bSjho96gs71Fgqns_0IjscYDJB2nbtSEmBzHfbZNw",
        //     Authrozation:"Bearer "+ store.state.token,
        // }
    });
}

// function createInstanceWithAuth(url) {
//     const instance = axios.create({
//         baseURL: `${process.env.VUE_APP_API_URL}${url}`,
//         withCredentials: true
//     });
//     return setInterceptors(instance);
// }

export const instance = createInstance();
// export const posts = createInstanceWithAuth('posts')





