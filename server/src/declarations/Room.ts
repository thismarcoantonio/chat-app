import { User } from "./User";

export interface Room {
  id: string;
  name: string;
  maxUsers: number;
  private: boolean;
}
