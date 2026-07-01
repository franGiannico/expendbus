import { Alert, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Failure() {
  return (
    <Stack spacing={3} textAlign="center">
      <Alert severity="error">Pago rechazado</Alert>

      <Typography variant="h4" fontWeight="bold">
        No pudimos procesar el pago
      </Typography>

      <Typography>
        Intentá nuevamente o elegí otro medio de pago.
      </Typography>

      <Button component={Link} to="/" variant="contained">
        Volver al inicio
      </Button>
    </Stack>
  );
}

export default Failure;