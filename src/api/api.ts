import axios from "axios"


const customAxios = axios.create(
    {
        baseURL: "https://rickandmortyapi.com/api"
    }
)

export default class BaseApi {
    static get = async <T>(url:string, query?: any) => {
      return  await customAxios.get<T>(url, query)
    }
}