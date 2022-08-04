import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import { useState } from 'react'
import { useEffect } from 'react'
import useRequestData from '../../hooks/useRequestData'

export const DetalhesPage = (body, clear, setIsloading) => {

    const [restaurantDetail, setRestaurantDetail] = useState('')
    const [details, setDetails] = useState("")
    const params = useParams()
    const restaurantDetails = useRequestData([], `${BASE_URL}/restaurants/${params.restaurantId}`)
    const detalhes = restaurantDetails.restaurant
    
    const getRestaurantesDetalhes = () =>{
        setIsloading(true)
        axios.get
        (`${BASE_URL}/restaurants/${params.restaurantId}`,body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta)=>{
            setRestaurantDetail(resposta.data.restaurant)
            alert(resposta.data.message)
            clear()
            setIsloading(false)
        }).catch((erro)=>{
            alert(erro.response.message)
            setIsloading(false)
        })
    }
 
 useEffect(()=>{
getRestaurantesDetalhes()},[])


const categories = details && details.products.map((product)=> {
    return product.category
})

const filterCategories = categories && categories.filter((categoria, index)=> {
return categories.indexOf(categoria) === index;
})

const renderProdutos = () => {
    const categoriesRender = filterCategories && filterCategories.map((categorie)=> {
        return (
            <div 
            key={Math.random()}>
<p><b>{categorie}</b></p>
{details && details.products.map((produto)=>{
    if (categorie === produto.category) {
        return (
            <div 
            product={produto}
            key={produto.id}/>
        )
    }
})}
            </div>
        )
    })
    return categoriesRender 
 }

 
    return (
    <div>
    </div>
  )
}
