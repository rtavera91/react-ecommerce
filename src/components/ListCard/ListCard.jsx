import { useEffect, useState } from "react";

// Estilos
import "./ListCard.css";

// Router
import { Link } from "react-router-dom";

// Componentes
import ItemCard from "../ItemCard/ItemCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

const ListCard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "productos"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };
    getProducts();
  }, []);

  return (
    <Box m={2}>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
            <div>
              <ItemCard data={item} style={{ textDecoration: "none" }} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListCard;
