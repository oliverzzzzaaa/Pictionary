import React, { Component } from "react";
import MySocket from "../socket";

class Client2 extends Component {
  constructor() {
    super();
    this.state = {
      response: false
    };
  }
  componentDidMount() {
    const socket = MySocket.getSocket();
    socket.on("WELCOME", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {response ? <p>{response.data}</p> : <p>Loading...</p>}
      </div>
    );
  }
}
export default Client2;
