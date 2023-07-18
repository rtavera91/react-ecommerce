import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ItemCard from "../../components/ItemCard/ItemCard";
import "./CategoryPage.css";

// Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const CategoryPage = () => {
  const { category } = useParams();
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const q = query(
        collection(db, "productos"),
        where("category", "==", category)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItemsData(docs); // Actualiza el estado con los datos obtenidos de Firebase
    };
    getItems();
  }, [category]);

  return (
    <Box m={2}>
      <Grid container spacing={2}>
        {itemsData.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
            <div>
              <ItemCard data={item} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryPage;
