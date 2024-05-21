import axios from "axios"
const BASE_URL = "http://localhost:3000"
export const getAll = () => axios.get(BASE_URL).then((res) => {
    return (res)
}).catch((err) => {
    return err
})

export const getOne = (id) => axios.get(BASE_URL + `/${id}`).then((res) => {
    return (res)
}).catch((err) => {
    return err
})

export const delOne = (id) => axios.delete(BASE_URL + `/${id}`).then((res) => {
    {return res.data,
    console.log(res.data);}
}).catch((err) => {
    return err
})
export const postOne = (payload) => axios.post(BASE_URL, payload).then((res) => {
    {
        return (res.data),
        console.log(res.data);
    }
}).catch((err) => {
    return err
})

