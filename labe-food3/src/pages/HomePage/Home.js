import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useForm,
  useState,
} from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SearchGroup, ImputSearch, SearchIcon } from "./style";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { BASE_URL } from "../../constants/urls";

export default function Home() {
  // const navigate = useNavigate();
  // const { restaurant, setRestaurant, setColors, order } = useContext();
  // const { form, onChangeInput } = useForm({});
  // const [food, setFood] = useState("");
  // const [foodType, setFoodType] = useState("");

  // const gotoDetalhesPage = (id) => {
  //   gotoDetalhesPage(navigate, id);

  //   useLayoutEffect(() => {
  //     setColors.setColor("#cb4646");
  //     setColors.setColorCrd("");
  //     setColors.setColorPrifile("");
  //   }, []);

  //   useEffect(() => {
  //     GetRestaurantes();
  //   });

  //   const GetRestaurantes = () => {
  //     axios
  //       .get(`${BASE_URL}/resturants`, {
  //         headers: {
  //           auth: token,
  //         },
  //       })
  //       .then((resposta) => {
  //         console.log(resposta.data);
  //       })
  //       .catch((erro) => {
  //         alert(erro.response.data.message);
  //       });
  //   };

  //   const onChangFood = (value) => {
  //     setFood(value);
  //     switch (value) {
  //       case "Árabe":
  //         if (foodType === 1) {
  //           setFoodType(0);
  //         } else {
  //           setFoodType(1);
  //         }
  //         break;
  //       case "Asiática":
  //         if (foodType === 2) {
  //           setFoodType(0);
  //         } else {
  //           setFoodType(2);
  //         }
  //         break;
  //       case "Hamburguer":
  //         if (foodType === 3) {
  //           setFoodType(0);
  //         } else {
  //           setFoodType(3);
  //         }
  //         break;
  //       case "Italiana":
  //         if (foodType === 4) {
  //           setFoodType(0);
  //         } else {
  //           setFoodType(4);
  //         }
  //         break;
  //       case "Sorvetes":
  //         if (foodType === 5) {
  //           setFoodType(0);
  //         } else {
  //           setFoodType(5);
  //         }
  //         break;
  //       case "Carnes":
  //         if (foodType === 6) {
  //           setFoodType(0);
  //         } else {
  //           setFoodType(6);
  //         }
  //         break;
  //       case "Baiana":
  //         if (foodType === 7) {
  //           setFoodType(0);
  //         } else {
  //           setFoodType(7);
  //         }
  //         break;
  //       case "Petiscos":
  //         if (foodType === 8) {
  //           setFoodType(0);
  //         } else {
  //           setFoodType(8);
  //         }
  //         break;
  //       case "Mexicana":
  //         if (foodType === 9) {
  //           setFoodType(0);
  //         } else {
  //           setFoodType(9);
  //         }
  //         break;
  //     }
  //   };
  // };

  // const token = localStorage.getItem("token");

  // const noneRestaurant = () => {
  //   if (foodType === 0) {
  //     const listRestaurants = restaurant
  //       .filter((item) => {
  //         return item.name
  //           .tolowercase()
  //           .includes(form.restaurant.toLowerCase())
  //       })
  //       .filter((restaurant) => {
  //         return food === restaurant.category;
  //       })
  //       .map((rest) => {
  //         return (
  //           <div
  //             key={rest.id}
  //             restaurant={rest}
  //             changePage={() => gotoDetalhesPage(rest.id)}
  //           />
  //         );
  //       });
  //       return listRestaurants;
  //     }else{
  //       const listRestaurants = restaurant.filter((item)=>{
  //         return
  //       })
  //     }
  // };

  return (
    <div>
      <Header />
      <main>
        <SearchGroup>
          <ImputSearch
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
      </main>
      <Footer />
    </div>
  );
}
