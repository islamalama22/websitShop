import useFetch from './useFetch'

function useProduct(id) {
  return useFetch(['Product'],`/Products/${id}`); 
}

export default useProduct;
