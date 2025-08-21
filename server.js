import express from "express";
import { WebSocketServer } from "ws";
import http from "http";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

let clients = new Map(); // clientId -> { ws, name }

app.use(express.static("public"));

wss.on("connection", (ws) => {
  const clientId = Date.now().toString();
  clients.set(clientId, { ws, name: "Unbekannt" });

  ws.on("message", (msg) => {
    const data = JSON.parse(msg);

    if (data.type === "register") {
      clients.get(clientId).name = data.name;
      broadcastClients();
    }

    if (["offer", "file", "answer"].includes(data.type)) {
      const target = clients.get(data.to);
      if (target) {
        target.ws.send(JSON.stringify({
          ...data,
          from: clientId,
          fromName: clients.get(clientId).name
        }));
      }
    }
  });

  ws.on("close", () => {
    clients.delete(clientId);
    broadcastClients();
  });
});

function broadcastClients() {
  const list = Array.from(clients.entries()).map(([id, c]) => ({
    id,
    name: c.name
  }));
  for (let { ws } of clients.values()) {
    ws.send(JSON.stringify({ type: "clients", clients: list }));
  }
}

server.listen(3000, () => console.log("Server läuft auf http://localhost:3000"));
