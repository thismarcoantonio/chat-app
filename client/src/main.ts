import { socket } from "./config";
import { Room } from "./declarations/Room";
import { renderPage } from "./router";
import "./style.css";

socket.on("rooms", (rooms: Room[]) => renderPage({ rooms }));
