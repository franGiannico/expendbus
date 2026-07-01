import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ProductCard({ producto, onBuy, loading }) {
  return (
    <Card sx={{ borderRadius: 4, boxShadow: 4 }}>
      <CardMedia
        component="img"
        height="260"
        image={producto.imagen}
        alt={producto.nombre}
      />

      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {producto.nombre}
        </Typography>

        <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
          <Typography variant="body1" color="text.secondary">
            Precio
          </Typography>

          <Typography variant="h5" fontWeight="bold" color="success.main">
            ${producto.precio}
          </Typography>
        </Stack>
      </CardContent>

      <CardActions sx={{ p: 2 }}>
        <Button
          fullWidth
          size="large"
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={onBuy}
          disabled={loading}
        >
          {loading ? "Procesando..." : "Comprar ahora"}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;