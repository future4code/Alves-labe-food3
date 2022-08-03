import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goHome } from "../routes/coordinator"


export const useUnprotected = () => {
    const navigate = useNavigate()
    useEffect(() => {
      const token = localStorage.getItem('token')
      if (token){
        goHome(navigate)
      }
    }, [navigate])
  }