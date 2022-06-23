import { Socket } from "socket.io";
import { Room } from "../declarations/Room";
import { User } from "../declarations/User";
import { RoomController } from "../controllers/Room";
import { UserController } from "../controllers/User";
import { MessageController } from "../controllers/Message";

export default function (socket: Socket) {
  socket.emit("rooms", RoomController.rooms);

  socket.on(
    "join-room",
    ({ username, roomId }: { username: User["name"]; roomId: Room["id"] }) => {
      UserController.create({
        id: socket.id,
        name: username,
        roomId,
      });
      socket.emit("messages", MessageController.findById({ roomId }));
    }
  );
}
