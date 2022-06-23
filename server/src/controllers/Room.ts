import { Room } from "../declarations/Room";

const rooms: Room[] = [
  {
    id: "1",
    maxUsers: 20,
    name: "General",
    private: false,
  },
  {
    id: "2",
    maxUsers: 10,
    name: "Games",
    private: false,
  },
  {
    id: "3",
    maxUsers: 2,
    name: "Pair-Programming",
    private: false,
  },
  {
    id: "4",
    maxUsers: 20,
    name: "Jibber jabber",
    private: false,
  },
  {
    id: "5",
    maxUsers: 15,
    name: "Investment",
    private: false,
  },
  {
    id: "6",
    maxUsers: 10,
    name: "Reading books",
    private: false,
  },
];

const RoomController = {
  rooms,
};

export { RoomController };
