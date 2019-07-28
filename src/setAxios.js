import axios from 'axios'
import router from './router.js'
import store from './store.js'

/**
 * 需要导入axios--拦截请求，router ---重定向，store---获取token值
 */
export default function setAxios(){
    
    //拦截每次请求，对配置进行处理
    axios.interceptors.request.use(
        config=>{
        //判断token是否存在，存在则在请求头上加token
        if (store.state.token){
            //设置请求头
            config.headers.token=store.state.token;
        }
        return config;
    })

//    拦截每次响应
    axios.interceptors.response.use(
        response=> {
            if (response.status == 200) {
                //获取响应数据
                let data = response.data;
                //如果过期则清空token
                if (data.code == -1) {
                    store.state.token = '';
                    window.localStorage.removeItem("token");
                    router.replace("/bootNav");
                    return data;
                }
                return response;
            }
        })
}



