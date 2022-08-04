import React, {
  useEffect,
  useLayoutEffect,
  useForm,
  useState,
} from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SearchGroup, ImputSearch, SearchIcon, TypesStyled } from "./style";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { BASE_URL } from "../../constants/urls";
import Typography from "@material-ui/core/Typography";


export default function Home() {
  const navigate = useNavigate();
  const [colors, setColors] = useState('')
  const [restaurant, setRestaurant]=useState('')
  const { form, handleInputChange } = useForm({});
  const [food, setFood] = useState("");
  const [foodType, setFoodType] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const gotoDetalhesPage = (id) => {
    gotoDetalhesPage(navigate, id);
  };

  useLayoutEffect(() => {
    setColors.setColor("#cb4646");
    setColors.setColorCrd("");
    setColors.setColorPrifile("");
  }, []);

  useEffect(() => {
    GetRestaurantes();
  });

  const GetRestaurantes = () => {
    axios
      .get(`${BASE_URL}/resturants`, {
        headers: {
          auth: token,
        },
      })
      .then((resposta) => {
       setRestaurant(resposta.data.restaurants)
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

  const token = localStorage.getItem("token");

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
        .map((rest) => {
          return (
            <div
              key={rest.id}
              restaurant={rest}
              changePage={() => gotoDetalhesPage(rest.id)}
            />
          );
        });
      return listRestaurants;
    } else {
      const listRestaurants = restaurant
        .filter((item) => {
          return item.name
            .toLowerCase()
            .includes(form.restaurant.toLowerCase());
        })
        .filter((rest) => {
          return (
            <div
              key={rest.id}
              restaurant={rest}
              changePage={() => gotoDetalhesPage(rest.id)}
            />
          );
        });
    }
  };

  return (
    <div>
      <Header />
      <main>
        <form>
          <SearchGroup>
            <ImputSearch
              name="restaurant"
              value={form.restaurant}
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
        {form.restaurant === "" ? (
          <TypesStyled>  
            <Typography
              color={foodType === 1 ? "secondary" : "primary"}
              onClick={() => onChangeFood("Árabe")}
            >
              <p><b>Árabe</b></p>
            </Typography>
            <Typography
              color={foodType === 2 ? "secondary" : "primary"}
              onClick={() => onChangeFood("Asiática")}
            >
             <p> <b>Asiática</b></p>
            </Typography>
            <Typography
              color={foodType === 3 ? "secondary" : "primary"}
              onClick={() => onChangeFood("Hamburguer")}
            >
              <p><b>Hamburguer</b></p>
            </Typography>
            <Typography
              color={foodType === 4 ? "secondary" : "primary"}
              onClick={() => onChangeFood("Italiana")}
            >
              <p><b>Italiana</b></p>
            </Typography>
            <Typography
              color={foodType === 5 ? "secondary" : "primary"}
              onClick={() => onChangeFood("Sorvetes")}
            >
             <p><b>Sorvetes</b></p> 
            </Typography>
            <Typography
              color={foodType === 6 ? "secondary" : "primary"}
              onClick={() => onChangeFood("Carnes")}
            >
             <p> <b>Carnes</b></p>
            </Typography>
            <Typography
              color={foodType === 7 ? "secondary" : "primary"}
              onClick={() => onChangeFood("Baiana")}
            >
             <p> <b>Baiana</b></p>
            </Typography>
            <Typography
              color={foodType === 8 ? "secondary" : "primary"}
              onClick={() => onChangeFood("Petiscos")}
            >
            <p>  <b>Petiscos</b></p>
            </Typography>
            <Typography
              color={foodType === 9 ? "secondary" : "primary"}
              onClick={() => onChangeFood("Mexicana")}
            >
              <p><b>Mexicana</b></p>
            </Typography>
          </TypesStyled>
        ) : (
          <div></div>
        )}
        <div>
          {noneRestaurant()}
         {isLoading === false  || foodType == null? <></> : <div
         restauramtName={foodType.restauramtName}
        totalPrice={foodType.totalPrice}/>}
          
   
        </div>

        <Footer />
      </main>
    </div>
  );
}
