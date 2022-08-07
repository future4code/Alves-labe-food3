import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gotoDetalhesPage } from '../../routes/coordinator'
import { useEffect } from 'react'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'

export const HomeTest = () => {
    const navigate = useNavigate()
    const [restaurants, setRestaurants] = useState([])
    const [foodType, setFoodType] = useState("");
    const [food, setFood] = useState("")

    const onClickCard = (id) => {
   gotoDetalhesPage(navigate,id) }


   useEffect(() => {
        GetRestaurantes();
      },[]);
    
      const GetRestaurantes = () => {
        axios
          .get(`${BASE_URL}/restaurants`, {
            headers: {
                Authorization: localStorage.getItem("token")
            },
          })
          .then((resposta) => {
           setRestaurants(resposta.data.restaurants)
           console.log(resposta.data.restaurants)
          })
          .catch((erro) => {
            alert(erro.response.data.message);
          });
      };

  const onChangeFood = (value) => {
    setFood(value);
    switch (value) {
      case "Árabe":
        if (foodType === 1) {
          setFoodType(0);
        } else {
          setFoodType(1);
        }
        break;
      case "Asiática":
        if (foodType === 2) {
          setFoodType(0);
        } else {
          setFoodType(2);
        }
        break;
      case "Hamburguer":
        if (foodType === 3) {
          setFoodType(0);
        } else {
          setFoodType(3);
        }
        break;
      case "Italiana":
        if (foodType === 4) {
          setFoodType(0);
        } else {
          setFoodType(4);
        }
        break;
      case "Sorvetes":
        if (foodType === 5) {
          setFoodType(0);
        } else {
          setFoodType(5);
        }
        break;
      case "Carnes":
        if (foodType === 6) {
          setFoodType(0);
        } else {
          setFoodType(6);
        }
        break;
      case "Baiana":
        if (foodType === 7) {
          setFoodType(0);
        } else {
          setFoodType(7);
        }
        break;
      case "Petiscos":
        if (foodType === 8) {
          setFoodType(0);
        } else {
          setFoodType(8);
        }
        break;
      case "Mexicana":
        if (foodType === 9) {
          setFoodType(0);
        } else {
          setFoodType(9);
        }
        break;
      default:
        setFoodType(0);
    }
  };

const RestCards = restaurants.map((rest)=>{
return (
    <div
    key={rest.id}
    image={rest.logoUrl}
    title={rest.name}
    time={rest.deliveryTime}
    price={rest.shipping}
    onClick={()=> onClickCard(rest.id)}
    />
)
})


const noneRestaurant = () => {
        if (foodType === 0) {
          const listRestaurants = restaurant
            .filter((item) => {
              return item.name
                .tolowercase()
                .includes(form.restaurant.toLowerCase());
            })
            .filter((restaurant) => {
              return food === restaurant.category;
            })
            .map((restaurant) => {
                <div
//               key={restaurant.id}
//               restaurant={restaurant}
//               changePage={() => gotoDetalhesPage(restaurant.id)}
//             />
//           );
//         });
//       return listRestaurants;
//     } else {
//       const listRestaurants = restaurant
//         .filter((item) => {
//           return item.name
//             .toLowerCase()
//             .includes(form.restaurant.toLowerCase());
//         })
//         .filter((rest) => {
//           return (
//             <div
//               key={rest.id}
//               restaurant={rest}
//               changePage={() => gotoDetalhesPage(rest.id)}
//             />
//           );
//         });
//     }
//   };






  return (
    <div>
            <Header title ='Ifuture'/>
        <main>
        <form>
         <SearchGroup>
           <ImputSearch
              name="restaurant"
              // value={form.restaurant}
              onChange={handleInputChange}
              type="search"
               id="outlined-basic"
              label="Restaurante"
               variant="outlined"
               required
               InputProps={{
                startAdornment: (
                   <InputAdornment>
                     <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </SearchGroup>
         </form>
         </main>
        {RestCards}
    
    </div>
  )
}
