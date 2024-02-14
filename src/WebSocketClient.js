class WebSocketClient {
    constructor() {
      this.socket = new WebSocket('ws://localhost:8080');
      this.socket.binaryType = "arraybuffer";
    }
  
    sendMessage(message) {
      this.socket.send(message);
    }
  
    setOnMessageCallback(callback) {
      this.socket.onmessage = callback;
    }
  }
  
  export default WebSocketClient;
  