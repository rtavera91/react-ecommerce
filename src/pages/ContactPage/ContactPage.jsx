import React from "react";
import Typography from "@mui/material/Typography";

const ContactPage = () => {
  return (
    <div>
      <Typography variant="h1" component="h1" gutterBottom>
        Contacto
      </Typography>
      <Typography variant="body1" gutterBottom>
        Para cualquier consulta o pregunta, no dudes en ponerte en contacto con
        nosotros.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Teléfono: 123-456-789
      </Typography>
      <Typography variant="body2" gutterBottom>
        Email: info@example.com
      </Typography>
    </div>
  );
};

export default ContactPage;
