import { Alert, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Success() {
  return (
    <Stack spacing={3} textAlign="center">
      <Alert severity="success">Pago aprobado</Alert>

      <Typography variant="h4" fontWeight="bold">
        ¡Gracias por tu compra!
      </Typography>

      <Typography>
        ¡Ya podés retirar tu producto!
      </Typography>

      <Button component={Link} to="/" variant="contained">
        Volver al inicio
      </Button>
    </Stack>
  );
}

export default Success;