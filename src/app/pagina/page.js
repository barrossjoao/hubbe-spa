'use client';
import React, { useEffect } from "react";
import io from "socket.io-client";
import styles from "./styles.module.css";


const Pagina = () => {
  useEffect(() => {
    const socket = io("http://localhost:8080"); 


    socket.on("message", (data) => {
      console.log("Recebido do servidor:", data);

    });

    socket.on("connect", () => {
      console.log("Conectado ao servidor WebSocket");
    });

    socket.on("disconnect", () => {
      console.log("Desconectado do servidor WebSocket");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const ocuparTelaSegura = () => {
    console.log()
  };

  return (
    <div className={styles.flexContainer}>
      <div>
        <button onClick={ocuparTelaSegura}>Ocupar Tela Segura</button>
      </div>
    </div>
  );
};

export default Pagina;
