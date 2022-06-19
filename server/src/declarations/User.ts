import { Room } from "./Room";

export interface User {
  id: string;
  name: string;
  roomId: Room["id"];
}
