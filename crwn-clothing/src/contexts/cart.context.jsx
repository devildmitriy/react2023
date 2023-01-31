import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const findItem = cartItems.find((item) => item.id === productToAdd.id);

  if (findItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [{ ...productToAdd, quantity: 1 }, ...cartItems];
};

const removeCartItem = (cartItiems, itemToRemove) => {
  const findItem = cartItiems.find((item) => item.id === itemToRemove.id);

  if (findItem.quantity === 1) {
    return cartItiems.filter((item) => item.id !== itemToRemove.id);
  }

  return cartItiems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const removeCartProduct = (cartItiems, productToRemove) => {
  return cartItiems.filter((item) => item.id !== productToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  removeProductFromCart: () => null,
  cartCount: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const removeProductFromCart = (cartProductToRemove) => {
    setCartItems(removeCartProduct(cartItems, cartProductToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    removeProductFromCart,
    cartItems,
    cartCount,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
