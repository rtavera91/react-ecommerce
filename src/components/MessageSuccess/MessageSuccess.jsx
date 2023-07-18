import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function MessageSuccess({ purchaseID }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success" onClose={() => {}}>
        Gracias por su compra! su id de transacción es: {purchaseID}
      </Alert>
    </Stack>
  );
}
