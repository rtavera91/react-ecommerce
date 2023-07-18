import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../hooks/useCart.js";

//estilo
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useCart();

  const getTotalItems = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <Link to="/cart" className="CartWidget">
      <Badge badgeContent={getTotalItems()} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </Link>
  );
};

export default CartWidget;
