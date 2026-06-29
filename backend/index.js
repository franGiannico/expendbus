//backend/index.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MercadoPagoConfig, Preference } from "mercadopago";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

const preference = new Preference(client);

app.get("/", (req, res) => {
  res.send("Backend ExpendBus funcionando");
});

app.post("/crear-pago", async (req, res) => {
  try {
    const response = await preference.create({
      body: {
        items: [
          {
            title: "Alfajor",
            quantity: 1,
            unit_price: 1500,
            currency_id: "ARS",
          },
        ],
        external_reference: "pedido-001", // Identificador único del pedido para mejorar en el futuro

        back_urls: {
          success: "https://expendbus.netlify.app/success",
          failure: "https://expendbus.netlify.app/failure",
          pending: "https://expendbus.netlify.app/pending",
        },
        auto_return: "approved",
      },
    });

    res.json({
      init_point: response.init_point,
    });
  } catch (error) {
    console.error("Error creando pago:", error);
    res.status(500).json({
      error: "Error creando pago",
      detalle: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});