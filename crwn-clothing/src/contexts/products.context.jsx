import { createContext, useState, useEffect } from "react";
// import { addCollectionAndDocuments } from "../utils/firebase.utils";
// import SHOP_DATA from "../shop-data.js";

export const ProductContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

// useEffect(()=> {
//     console.log('start',SHOP_DATA)
//     addCollectionAndDocuments('categories',SHOP_DATA)
// },[])

  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
