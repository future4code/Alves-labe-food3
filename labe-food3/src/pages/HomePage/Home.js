// import React, {
//   useEffect,
//   useLayoutEffect,
//   useState,
// } from "react";
// import Footer from "../../components/Footer/Footer";
// import Header from "../../components/Header/Header";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { SearchGroup, ImputSearch, SearchIcon, TypesStyled } from "./style";
// import IconButton from "@material-ui/core/IconButton";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import { BASE_URL } from "../../constants/urls";
// import Typography from "@material-ui/core/Typography";
// import {useForm} from '../../hooks/useForm'


// export default function Home() {
//   const navigate = useNavigate();
//   const [form,setform] =useState('')
//   const [restaurant, setRestaurant]=useState('')
//   const [food, setFood] = useState("");
//   const [foodType, setFoodType] = useState("");
//   const [isLoading, setIsLoading] = useState(false)

//   const gotoDetalhesPage = (id) => {
//     gotoDetalhesPage(navigate, id);
//   };



//   const noneRestaurant = () => {
//     if (foodType === 0) {
//       const listRestaurants = restaurant
//         .filter((item) => {
//           return item.name
//             .tolowercase()
//             .includes(form.restaurant.toLowerCase());
//         })
//         .filter((restaurant) => {
//           return food === restaurant.category;
//         })
//         .map((restaurant) => {

//           return (
//             <div
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

//   return (
//     <div>
//       <Header title ='Ifuture'/>
//       <main>
//         <form>
//           <SearchGroup>
//             <ImputSearch
//               name="restaurant"
//               // value={form.restaurant}
//               onChange={handleInputChange}
//               type="search"
//               id="outlined-basic"
//               label="Restaurante"
//               variant="outlined"
//               required
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment>
//                     <IconButton>
//                       <SearchIcon />
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </SearchGroup>
//         </form>
//         {/* {setrestaurant === "" ? (
//           <TypesStyled>  
//             <Typography
//               color={foodType === 1 ? "secondary" : "primary"}
//               onClick={() => onChangeFood("Árabe")}
//             >
//               <p><b>Árabe</b></p>
//             </Typography>
//             <Typography
//               color={foodType === 2 ? "secondary" : "primary"}
//               onClick={() => onChangeFood("Asiática")}
//             >
//              <p> <b>Asiática</b></p>
//             </Typography>
//             <Typography
//               color={foodType === 3 ? "secondary" : "primary"}
//               onClick={() => onChangeFood("Hamburguer")}
//             >
//               <p><b>Hamburguer</b></p>
//             </Typography>
//             <Typography
//               color={foodType === 4 ? "secondary" : "primary"}
//               onClick={() => onChangeFood("Italiana")}
//             >
//               <p><b>Italiana</b></p>
//             </Typography>
//             <Typography
//               color={foodType === 5 ? "secondary" : "primary"}
//               onClick={() => onChangeFood("Sorvetes")}
//             >
//              <p><b>Sorvetes</b></p> 
//             </Typography>
//             <Typography
//               color={foodType === 6 ? "secondary" : "primary"}
//               onClick={() => onChangeFood("Carnes")}
//             >
//              <p> <b>Carnes</b></p>
//             </Typography>
//             <Typography
//               color={foodType === 7 ? "secondary" : "primary"}
//               onClick={() => onChangeFood("Baiana")}
//             >
//              <p> <b>Baiana</b></p>
//             </Typography>
//             <Typography
//               color={foodType === 8 ? "secondary" : "primary"}
//               onClick={() => onChangeFood("Petiscos")}
//             >
//             <p>  <b>Petiscos</b></p>
//             </Typography>
//             <Typography
//               color={foodType === 9 ? "secondary" : "primary"}
//               onClick={() => onChangeFood("Mexicana")}
//             >
//               <p><b>Mexicana</b></p>
//             </Typography>
//           </TypesStyled>
//         ) : (
//           <div></div>
//         )} */}
//         <div>
//           {noneRestaurant()}
//          {isLoading === false  || foodType == null? <></> : <div
//          restauramtName={foodType.restauramtName}
//         totalPrice={foodType.totalPrice}/>}
          
   
//         </div>

//         <Footer />
//       </main>
//     </div>
//   );
// }
