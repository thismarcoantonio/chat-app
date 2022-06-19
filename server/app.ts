import * as http from "http";
import * as dotenv from "dotenv";
import { Server } from "socket.io";
import { setupEvents } from "./src/events";

dotenv.config();

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const PORT = process.env.PORT;

io.on("connection", setupEvents);

server.listen(PORT, () => {
  console.info(`Server started at http://localhost:${PORT}`);
});
