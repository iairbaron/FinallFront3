import React, { useState } from "react";

const Form = () => {

    const[nombre,setNombre] = useState('');
    const[email,setEmail] = useState('');
    const[mensaje,setMensaje] = useState('');

const handleSubmit = (e) => {
        e.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nombre.length > 6 && emailRegex.test(email) ) {
    setMensaje("Gracias " + nombre + " Se envio recibimos tu formulario!")
  } else {
    setMensaje("Algo está mal en tu formulario");
  }
};
  
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input
          name="nombre"
          type="text"
          onChange={(e)=>setNombre(e.target.value)}
        />
        <input
          type="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        {mensaje && <p>{mensaje}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
