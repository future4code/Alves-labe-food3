import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goLogin } from "../routes/coordinator"


export const useProtected = () => {
    const navigate = useNavigate()
    useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token){
        goLogin(navigate)
      }
    }, [navigate])
  }