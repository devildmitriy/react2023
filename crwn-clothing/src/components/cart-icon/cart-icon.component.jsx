import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { setIsCartOpen,cartCount } = useContext(CartContext);

  const onOpenHandler = () => {
    setIsCartOpen((state) => {
      return !state;
    });
  };

  return (
    <div className="cart-icon-container" onClick={onOpenHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
