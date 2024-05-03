
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8080/api",

})

export const loginUser = async (data) => {
    console.log("Paso por aqui hello")
    const response = await axios.post("/auth/login", data)
    if(response.ok){
        return response.data
    }else{
        throw Error("Login Failed")
    }
}

