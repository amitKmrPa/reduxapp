import axios from "axios";
import { GET_PRODUCTS_DATA } from "./ActionType";
import productApi from "../apis/productApi";
const getProducts = () => async (dispatch)=>{
    await productApi.get("/getAllProductsDetailsForReduxApp")
    .then((response) => {
      dispatch({type:GET_PRODUCTS_DATA,payload:response})
  });
  };

export default getProducts;