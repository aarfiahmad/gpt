import { useState, useEffect, useCallback } from 'react';


export const useFetch = (url) => {

  
// const url = 'https://course-api.com/javascript-store-products'


  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback( async () => {

    const response = await fetch(url);

    const products = await response.json();

    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, products };
};