import express from "express";
import { WebSocketServer } from "ws";
import http from "http";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

let clients = new Map(); // clientId -> ws

// Statische Dateien ausliefern
app.use(express.static("public"));

wss.on("connection", (ws) => {
  const clientId = Date.now().toString();
  clients.set(clientId, ws);

  // allen mitteilen, dass ein neuer da ist
  broadcastClients();

  ws.on("message", (msg) => {
    let data = {};
    try {
      data = JSON.parse(msg);
    } catch (e) {
      return;
    }

    // Weiterleiten an Zielgerät
    if (data.type === "offer" || data.type === "file" || data.type === "answer") {
      const target = clients.get(data.to);
      if (target) {
        target.send(JSON.stringify({ ...data, from: clientId }));
      }
    }
  });

  ws.on("close", () => {
    clients.delete(clientId);
    broadcastClients();
  });
});

function broadcastClients() {
  const list = Array.from(clients.keys());
  for (const [id, ws] of clients) {
    ws.send(JSON.stringify({ type: "clients", clients: list.filter((c) => c !== id) }));
  }
}

server.listen(3000, () => {
  console.log("✅ Server läuft auf http://localhost:3000");
});

