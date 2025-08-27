import axios from "axios";
const BASE_URL = "https://api.escuelajs.co/api/v1";

export const getAllProducts = async () =>{
    const url = `${BASE_URL}/products`;
    try{
        const {data} = await axios.get(url);
        return data;
    }
    catch(err){
        return [];
    }
}