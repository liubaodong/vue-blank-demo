import axios from 'axios'


export default function request(config) {

    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 10000
    });

    // 请求拦截器
    instance.interceptors.request.use(config => {
        //  console.log(config)

        return config
    }, err => {
        throw (err)
    })
    // 响应拦截
    instance.interceptors.response.use(response => {
        // console.log(response.data)

        return response.data
    }, err => {
        throw (err)
    })

    // 返回instances实例 (本身就是promises)
    return instance(config)
}