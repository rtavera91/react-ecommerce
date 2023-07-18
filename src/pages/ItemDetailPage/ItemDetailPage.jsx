import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemCard from "../../components/ItemCard/ItemCard";
import "./ItemDetailPage.css";
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

//Custom Hook de Context - funcionalidad CartContext
import { useCart } from "../../hooks/useCart.js";

const ItemDetailPage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(itemData);
  };

  const { id } = useParams();
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const getItem = async () => {
      const q = query(
        collection(db, "productos"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItemData(docs[0] || null);
    };
    getItem();
  }, [id]);

  return (
    <div className="ItemDetail">
      {itemData ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={itemData.image}
              alt={itemData.title}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {itemData.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Category: {itemData.category}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Price: ${itemData.price}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Stock: {itemData.stock}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {itemData.description}
            </Typography>
            <Button
              variant="contained"
              className="button"
              startIcon={<AddIcon />}
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="body1" gutterBottom>
          Loading...
        </Typography>
      )}
      {!itemData && (
        <Typography variant="body1" gutterBottom>
          No data found.
        </Typography>
      )}
    </div>
  );
};

export default ItemDetailPage;
