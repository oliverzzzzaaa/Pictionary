import io from "socket.io-client";
export default class MySocket {
  socket;
  static getSocket = userId => {
    if (MySocket.socket === undefined || !MySocket.socket.connected) {
      MySocket.socket = io();
      if (userId) {
        MySocket.socket.emit("login", { userId: userId });
      }
    }
    return MySocket.socket;
  };
}
