
import { Socket } from "socket.io";
export function getPub(socket: Socket, msg: any, ack: any) {
  console.log('hi', msg);

  ack(msg+'hi')
  //return  socket.to(msg.roomId).emit("newMsg", msg.caption);
}