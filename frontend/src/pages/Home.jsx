import { useState } from "react";
import { Typography, Box } from "@mui/material";

import ProductCard from "../components/ProductCard";
import { crearPago } from "../services/api";

function Home() {
  const [loading, setLoading] = useState(false);

  const producto = {
    nombre: "Alfajor",
    precio: 1500,
    imagen: "https://i.imgur.com/2DhmtJ4.jpg",
  };

  const comprar = async () => {
    try {
      setLoading(true);
      const data = await crearPago();
      window.location.href = data.init_point;
    } catch (error) {
      console.error(error);
      alert("Error al iniciar el pago");
      setLoading(false);
    }
  };

  return (
    <Box textAlign="center">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Comprá y retirá en la máquina
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Pago seguro mediante Mercado Pago
      </Typography>

      <ProductCard producto={producto} onBuy={comprar} loading={loading} />
    </Box>
  );
}

export default Home;