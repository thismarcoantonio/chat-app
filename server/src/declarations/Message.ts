import { Room } from "./Room";
import { User } from "./User";

export interface Message {
  id: string;
  text: string;
  timestamp: Date;
  roomId: Room["id"];
  userId: User["id"];
}
