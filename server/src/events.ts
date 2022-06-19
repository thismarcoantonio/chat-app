import { Socket } from "socket.io";
import { v4 as uuid } from "uuid";
import { Room } from "./declarations/Room";
import { User } from "./declarations/User";
import { Message } from "./declarations/Message";

const rooms: Room[] = [
  {
    id: "1",
    maxUsers: 20,
    name: "General",
    private: false,
  },
];

const users: User[] = [];

const messages: Message[] = [];

export function setupEvents(socket: Socket) {
  socket.on(
    "join-room",
    ({ username, roomId }: { username: User["name"]; roomId: Room["id"] }) => {
      users.push({
        roomId,
        id: socket.id,
        name: username,
      });
      socket.emit(
        "messages",
        messages.filter((message) => {
          message.roomId === roomId;
        })
      );
    }
  );

  socket.on("message", ({ text }: { text: string }) => {
    const activeUser = users.find((user) => user.id === socket.id);
    if (!activeUser) return null;
    messages.push({
      text,
      id: uuid(),
      timestamp: new Date(),
      userId: activeUser.id,
      roomId: activeUser.roomId,
    });
  });

  socket.emit("rooms", rooms);
}
