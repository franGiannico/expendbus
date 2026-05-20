import express from "express";
import mercadopago from "mercadopago";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN,
});

// 👉 Crear pago
app.post("/crear-pago", async (req, res) => {
  try {
    const preference = {
      items: [
        {
          title: "Alfajor",
          quantity: 1,
          unit_price: 1500,
        },
      ],
      back_urls: {
        success: "https://tu-frontend.com/success",
        failure: "https://tu-frontend.com/failure",
        pending: "https://tu-frontend.com/pending",
      },
      auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(preference);

    res.json({
      init_point: response.body.init_point,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creando pago");
  }
});

// 👉 Webhook (después lo usamos con ESP32)
app.post("/webhook", (req, res) => {
  console.log("Webhook recibido:", req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor corriendo en", PORT));