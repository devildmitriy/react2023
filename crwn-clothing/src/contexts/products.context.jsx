import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";
// import { addCollectionAndDocuments } from "../utils/firebase.utils";
// import SHOP_DATA from "../shop-data.js";

export const ProductContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  /*   useEffect(()=> {
      console.log('start',SHOP_DATA)
      addCollectionAndDocuments('categories',SHOP_DATA)
  },[]) */

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setProducts(categoryMap.hats);
    };

    getCategoriesMap();
  },[]);

  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
