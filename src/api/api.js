
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8080/api",

})

export const loginUser = async (data) => {
    console.log(data);
    try {
        const response = await api.post("/auth/login", data);
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};


export const getAllAppointments = async () => {
    try {
        const response = await api.get("/appointment/get_allAppointments", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        })
        return response.data;
    }
    catch (err) {
        console.log(err);
        throw err;
    }

}
export const getAllUsers = async () => {
    try {
        const response = await api.get("/users/get_AllUsers")
        return response.data;
    }
    catch (err) {
        console.log(err);
        throw err;
    }

}

export const deleteAppointment = async (id) => {
    try {
        const response = await api.delete(`/appointment/delete_appointment/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        })
        return response.data;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}


