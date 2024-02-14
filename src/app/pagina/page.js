"use client";
import React, { useState, useEffect } from "react";
import WebSocketClient from "../../WebSocketClient";
import styles from "./styles.module.css";
import PageConnected from "@/components/PageConnected/PageConnected";
import PageOccupied from "@/components/PageOccupied/PageOccupied";

function App() {
  const [socketClient, setSocketClient] = useState(null);
  const [isPageOccupied, setIsPageOccupied] = useState(null);

  useEffect(() => {
    const client = new WebSocketClient();
    client.setOnMessageCallback((event) => {
      if (event.data === "Occupied") {
        setIsPageOccupied(true);
      } else if (event.data === "PageAvailable") {
        setIsPageOccupied(false);
        setSocketClient(new WebSocketClient());
      }
    });

    client.onclose = () => {
      setTimeout(() => {
        setSocketClient(new WebSocketClient());
      }, 1000);
    };

    setSocketClient(client);

    return () => {
      if (client) {
        client.socket.close();
      }
    };
  }, []);

  return (
    <div className={styles.flexContainer}>
      {isPageOccupied ? <PageOccupied /> : <PageConnected />}
    </div>
  );
}

export default App;
