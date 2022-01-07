
module.exports = {
    // devServer: {
    //     port: 8081, //dev server port
    //     overlay: false,
    //     proxy: "http://localhost:9090"
    // }
    devServer: {
        port: 8080,
        proxy: { // proxyTable 설정
            '/api': { // api 로 시작하는 소스 는 traget으로 잡아준다. > 사용할때 url 이 api 가 있어야 한다.
                target: process.env.VUE_APP_API_URL, // www.xxx.com
                changeOrigin: true
            },
            // '/aw': { // aw로 url 이 시작하면 이렇게 target을 잡아준다.
            //     target: process.env.VUE_APP_PROD_AW_DOMAIN,
            //     changeOrign: true
            // },
        }
    }
}