import { render } from "lit-html";
import { homePage } from "@/pages/home";
import { socket } from "./config";
import { Room } from "./declarations/Room";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

socket.on("rooms", (rooms: Room[]) => {
  render(homePage({ rooms }), app);
});
