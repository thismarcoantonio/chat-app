import { Room } from "./Room";

export interface Message {
  id: string;
  text: string;
  timestamp: Date;
  roomId: Room["id"];
}
