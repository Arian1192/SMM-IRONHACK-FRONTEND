
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8080/api",

})

export const loginUser = async (data) => {
    const response = await axios.post("/auth/login", data)
    if(response.ok){
        console.log(response)
        return response
    }else{
        throw Error("Login Failed")
    }
}

