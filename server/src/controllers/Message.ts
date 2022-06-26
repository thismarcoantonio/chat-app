import { Message } from "../declarations/Message";

const messages: Message[] = [];

const MessageController = {
  messages,
  create(message: Message) {
    return messages.push(message);
  },
  findById({ roomId }) {
    return messages.filter((message) => message.roomId === roomId);
  },
};

export { MessageController };
