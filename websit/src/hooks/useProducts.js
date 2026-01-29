import i18n from "../i18n";
import useFetch from "./useFetch";

export function  useProducts(filters={}){

     // cash data  /  url/parameter
     return useFetch(['products',i18n.language,filters] , '/Products',filters);
}