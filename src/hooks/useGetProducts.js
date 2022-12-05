import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async (API) => {
      const response = await axios(API);
      setProducts(response.data);
    };
    getData(API);
  }, []);
  return products;
};

export default useGetProducts;
