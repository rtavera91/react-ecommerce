import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import "./ItemCard.css";

// Custom Hook de Context - funcionalidad CartContext
import { useCart } from "../../hooks/useCart.js";

const ItemCard = ({ data }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(data);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="ItemCard">
      <Link to={`/shop/${data.category}/${data.id}`} className="cardLink">
        <CardMedia
          component="img"
          image={data.image}
          alt={data.title}
          className="img"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.category} | {data.genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${data.price} | Stock: {data.stock}
          </Typography>
        </CardContent>
      </Link>
      <Button
        variant="contained"
        className="button"
        startIcon={<AddIcon />}
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </Button>
    </Card>
  );
};

export default ItemCard;
