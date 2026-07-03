//backend/index.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MercadoPagoConfig, Preference, Payment } from "mercadopago";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

const preference = new Preference(client);

const payment = new Payment(client);

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
            unit_price: 1,
            currency_id: "ARS",
          },
        ],
        external_reference: "pedido-001", // Identificador único del pedido para mejorar en el futuro

        back_urls: {
        success: "https://expendbus.netlify.app/#/success",
        failure: "https://expendbus.netlify.app/#/failure",
        pending: "https://expendbus.netlify.app/#/pending",
      },
        auto_return: "approved",

        notification_url: "https://expendbus-backend-63572f3be5ce.herokuapp.com/webhook",
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

app.post("/webhook", async (req, res) => {
  try {
    console.log("Webhook recibido:", req.body);

    const paymentId =
      req.body?.data?.id ||
      req.query?.id ||
      req.query?.["data.id"];

    if (!paymentId) {
      console.log("Webhook sin paymentId");
      return res.sendStatus(200);
    }

    const paymentInfo = await payment.get({ id: paymentId });

    console.log("Pago consultado:", {
      id: paymentInfo.id,
      status: paymentInfo.status,
      external_reference: paymentInfo.external_reference,
      transaction_amount: paymentInfo.transaction_amount,
    });

    if (paymentInfo.status === "approved") {
      console.log("✅ Pago aprobado. Acá después abrimos la puerta.");
    }

    res.sendStatus(200);
  } catch (error) {
    console.error("Error en webhook:", error);
    res.sendStatus(200);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});