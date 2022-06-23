import * as http from "http";
import * as dotenv from "dotenv";
import * as path from "node:path";
import { Server } from "socket.io";
import { readdir } from "fs/promises";

dotenv.config();

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const PORT = process.env.PORT;

io.on("connection", async (socket) => {
  const fileNames = await readdir(path.resolve(".", "src", "events"));
  const files = await Promise.all(
    fileNames.map(
      (fileName) => import(path.resolve(".", "src", "events", fileName))
    )
  );
  files.forEach(({ default: event }) => event(socket));
});

server.listen(PORT, () => {
  console.info(`Server started at http://localhost:${PORT}`);
});
