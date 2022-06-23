import { Socket } from "socket.io";
import { v4 as uuid } from "uuid";
import { Room } from "../declarations/Room";
import { User } from "../declarations/User";
import { UserController } from "../controllers/User";
import { MessageController } from "../controllers/Message";

export default function (socket: Socket) {
  socket.on("message", ({ text }: { text: string }) => {
    const activeUser = UserController.findById(socket.id);
    if (!activeUser) return null;
    MessageController.create({
      text,
      id: uuid(),
      timestamp: new Date(),
      userId: activeUser.id,
      roomId: activeUser.roomId,
    });
  });
}
