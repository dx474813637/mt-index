import axios from 'axios';
axios.defaults.baseURL = 'http://api.duyiedu.com'
//全局拦截
axios.interceptors.request.use(function(config){
    config.params = {
        ...config.params,
        appkey: "dx5184_1553776734588"
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

export default axios