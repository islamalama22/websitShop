import useFetch from './useFetch'


//  the  id  
function useProduct(id) {
  return useFetch(['Product',id],`/Products/${id}`); 
}

export default useProduct;
