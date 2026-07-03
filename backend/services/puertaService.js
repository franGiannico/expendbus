export async function abrirPuerta(paymentInfo, io, esp32Socket) {
  console.log("🔓 Intentando abrir puerta...");

  if (!esp32Socket) {
    console.log("⚠️ No hay ESP32 conectado");
    return;
  }

  esp32Socket.emit("abrir_puerta", {
    payment_id: paymentInfo.id,
    external_reference: paymentInfo.external_reference,
  });

  console.log("✅ Orden enviada al ESP32");
}