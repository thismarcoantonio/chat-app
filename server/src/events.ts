import { Socket } from "socket.io";
import { Room } from "./declarations/Room";
import { User } from "./declarations/User";

let rooms: Room[] = [
  {
    id: "1",
    maxUsers: 20,
    name: "Test room",
    private: false,
    users: [],
  },
];

export function setupEvents(socket: Socket) {
  socket.on(
    "join-room",
    ({ user, roomId }: { user: User; roomId: Room["id"] }) => {
      rooms = rooms.map((room) =>
        roomId === room.id ? { ...room, users: [...room.users, user] } : room
      );
      socket.emit("rooms", rooms);
    }
  );

  socket.emit("rooms", rooms);
}
