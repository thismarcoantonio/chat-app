import { Message } from "@/declarations/Message";
import { Room } from "@/declarations/Room";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

let rooms: Room[] = [];
let messages: Message[] = [];

socket.on("messages", (result: Message[]) => {
  console.log(result);
  messages = result;
});

export { socket, rooms, messages };
