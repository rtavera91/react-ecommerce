import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../hooks/useCart.js";
import "./ShopPage.css";
import CheckIcon from "@mui/icons-material/Check";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

//Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

//Components
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";
import { Badge } from "@mui/material";

const initialState = {
  name: "",
  lastName: "",
  city: "",
  address: "",
  email: "",
};

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: "50px",
  },
  formContainer: {
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "left",
  },
  inputField: {
    marginBottom: "10px",
    width: "100%",
  },
  submitButton: {
    margin: "10px auto",
    display: "block",
    width: "200px",
    backgroundColor: "green",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "darkgreen",
    },
  },
  description: {
    color: "black",
    marginBottom: "20px",
  },
  cartContent: {
    margin: "20px auto",
    maxWidth: "600px",
    padding: "20px",
    background: "#f5f5f5",
    borderRadius: "5px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  cartItemTitle: {
    flexGrow: 1,
  },
  cartItemQuantity: {
    marginLeft: "10px",
    marginRight: "10px",
  },
  cartItemTotal: {
    fontWeight: "bold",
  },
  cartItemButtons: {
    display: "flex",
    alignItems: "center",
  },
};

const ShopPage = () => {
  const [formData, setFormData] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(null);
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Agregar información del carrito al formulario
    const orderData = {
      ...formData,
      cart: cart.map((item) => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    // Enviar información del formulario a Firebase
    const docRef = await addDoc(collection(db, "orders"), orderData);
    setPurchaseID(docRef.id);
    setFormData(initialState);

    // Vaciar carrito
    clearCart();
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div style={styles.containerShop}>
      <h1 style={{ color: "black" }}>
        Ecommerce de reventa de productos adidas
      </h1>
      <p style={styles.description}>
        Bienvenido a nuestra tienda en línea. Aquí encontrarás una amplia
        selección de productos adidas para todas tus necesidades. ¡Disfruta de
        la experiencia de compra!
      </p>

      <div style={styles.cartContent}>
        <h2>Tu carrito de compras</h2>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <Typography style={styles.cartItemTitle}>
                  {item.title}
                </Typography>
                <Typography style={styles.cartItemQuantity}>
                  Cantidad: {item.quantity}
                </Typography>
                <Typography style={styles.cartItemQuantity}>
                  Precio: ${item.price}
                </Typography>
                <Typography style={styles.cartItemTotal}>
                  Monto Total: ${item.price * item.quantity}
                </Typography>
                <div style={styles.cartItemButtons}>
                  <Button
                    variant="outlined"
                    onClick={() => removeFromCart(item)}
                  >
                    Quitar
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => addToCart(item)}
                    style={{ marginLeft: "10px" }}
                  >
                    Agregar
                  </Button>
                </div>
              </div>
            ))}
            <Typography style={{ marginTop: "20px" }}>
              Monto Total: ${calculateTotal()}
            </Typography>
          </>
        )}
      </div>

      <form
        className="FormContainer"
        onSubmit={handleSubmit}
        style={styles.formContainer}
      >
        <TextField
          placeholder="Name"
          style={styles.inputField}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          placeholder="Last Name"
          style={styles.inputField}
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          placeholder="City"
          style={styles.inputField}
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <TextField
          placeholder="Address"
          style={styles.inputField}
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          placeholder="Email"
          style={styles.inputField}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          className="button"
          endIcon={<CheckIcon />}
          type="submit"
          style={styles.submitButton}
        >
          Finalizar Compra
        </Button>
        <Button
          variant="contained"
          className="button"
          endIcon={<RemoveShoppingCartIcon />}
          style={styles.submitButton} //recuerda cambiar color
          onClick={clearCart}
        >
          Vaciar Carrito
        </Button>
      </form>

      {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default ShopPage;
