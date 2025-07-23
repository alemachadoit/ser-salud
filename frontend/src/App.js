import React, { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("Cargando...");

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;

    fetch(`${apiUrl}/api/ping`)
      .then((res) => res.json())
      .then((data) => setMensaje(data.message))
      .catch((err) => {
        console.error("Error al conectar con backend:", err);
        setMensaje("No se pudo conectar al backend.");
      });
  }, []);

  return (
    <div>
      <h1>Proyecto Ser-Salud</h1>
      <p>Respuesta del backend: {mensaje}</p>
    </div>
  );
}

export default App;