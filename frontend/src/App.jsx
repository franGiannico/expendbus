import axios from "axios";

function App() {

  const comprar = async () => {
    try {
      const res = await axios.post("https://expendbus-backend-63572f3be5ce.herokuapp.com/crear-pago");

      window.location.href = res.data.init_point;
    } catch (error) {
      alert("Error al iniciar el pago");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Expend Bus</h1>

      <div style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        display: "inline-block"
      }}>
        <img 
          src="https://i.imgur.com/2DhmtJ4.jpg"
          width="200"
        />
        <h2>Alfajor</h2>
        <p>$1500</p>

        <button onClick={comprar}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default App;