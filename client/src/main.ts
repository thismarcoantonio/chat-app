import { io } from "socket.io-client";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
const socket = io("http://localhost:3001");

app.innerHTML = `
  <button id="startChat">Start chat</button>
`;

const button = document.querySelector<HTMLButtonElement>("#startChat");
button?.addEventListener("click", () => {
  socket.emit("hello", { username: "Teste" });
});
