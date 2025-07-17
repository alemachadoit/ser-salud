import React, { useState } from 'react';

function App() {
  const [respuesta, setRespuesta] = useState('');

  const consultarAPI = async () => {
    const res = await fetch('http://localhost:3001/api/ping');
    const data = await res.json();
    setRespuesta(data.message);
  };

  return (
    <div>
      <h1>Ser-Salud</h1>
      <button onClick={consultarAPI}>Consultar API-apo</button>
      <p>Respuesta: {respuesta}</p>
    </div>
  );
}

export default App;
