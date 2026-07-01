import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const crearPago = async () => {
  const res = await axios.post(`${API}/crear-pago`);
  return res.data;
};