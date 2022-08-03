import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { goHome } from "../../routes/coordinator"


export const login = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}login`, body)
        .then((res) => {
            console.log(res.data.token)
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goHome(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            
        })
}

export const signUp = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goHome(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}