import { Alert, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Pending() {
  return (
    <Stack spacing={3} textAlign="center">
      <Alert severity="warning">Pago pendiente</Alert>

      <Typography variant="h4" fontWeight="bold">
        Estamos esperando la confirmación
      </Typography>

      <Typography>
        Te avisaremos cuando el pago sea confirmado.
      </Typography>

      <Button component={Link} to="/" variant="contained">
        Volver al inicio
      </Button>
    </Stack>
  );
}

export default Pending;