const http = require("http");
const dotenv = require("dotenv");
const socketio = require("socket.io");

dotenv.config();

const server = http.createServer();
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const PORT = process.env.PORT;

io.on("connection", (socket) => {
  socket.on("hello", ({ username }) => {
    console.log(`Hello, ${username}.`);
  });
});

server.listen(PORT, () => {
  console.info(`Server started at http://localhost:${PORT}`);
});
