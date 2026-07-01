import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Stack spacing={3} textAlign="center">
      <Typography variant="h3" fontWeight="bold">
        404
      </Typography>

      <Typography>Página no encontrada.</Typography>

      <Button component={Link} to="/" variant="contained">
        Volver al inicio
      </Button>
    </Stack>
  );
}

export default NotFound;