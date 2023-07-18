import React from "react";
import Typography from "@mui/material/Typography";

const AboutPage = () => {
  return (
    <div>
      <Typography variant="h1" component="h1" gutterBottom>
        Acerca de Nosotros
      </Typography>
      <Typography variant="body1" gutterBottom>
        Somos una empresa especializada en la reventa de productos de la
        reconocida marca Adidas. Nos enorgullece ofrecer una amplia selección de
        zapatillas, ropa y accesorios de alta calidad para los amantes de la
        moda y el estilo deportivo.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Nuestro objetivo es brindar a nuestros clientes una experiencia de
        compra única, garantizando productos auténticos y originales. Trabajamos
        directamente con proveedores confiables para asegurarnos de ofrecer
        productos exclusivos y de edición limitada.
      </Typography>
      <Typography variant="body2" gutterBottom>
        En nuestra tienda, encontrarás los últimos lanzamientos de Adidas, así
        como clásicos atemporales que nunca pasan de moda. Estamos comprometidos
        con la satisfacción de nuestros clientes y nos esforzamos por brindar un
        servicio excepcional en todo momento.
      </Typography>
      <Typography variant="body2" gutterBottom>
        ¡Gracias por elegirnos como tu destino de confianza para productos
        Adidas de alta calidad!
      </Typography>
    </div>
  );
};

export default AboutPage;
