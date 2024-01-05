import axios from "axios"


const customAxios = axios.create(
    {
        baseURL: "https://rickandmortyapi.com/api"
    }
)

customAxios.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error.response.data.error || error)
    },
)

export default class BaseApi {
    static get = async <T>(url:string, params?: any) => {
    const response = await customAxios.get<T>(url, {params})
    return response;
    }
}