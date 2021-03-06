import React from "react";
import "./chat.css";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: ""
    };
    this.renderMessages = this.renderMessages.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    const msgBox = document.getElementById("msg-container");
    msgBox.scrollTop = msgBox.scrollHeight;
  }

  renderMessages() {
    if (this.props.messages) {
      return (
        <ul className="msg-list">
          {this.props.messages.map((msg, i) => (
            <li key={i} className="msg-li">
              {
                // user icon is better to have its own component
              }
              <div className="user-icon">{msg.sender}:</div>
              <span className="msg-body">{msg.body}</span>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  }

  keyPress(e) {
    if (e.keyCode === 13 && e.currentTarget.value !== "") {
      if (this.props.action) {
        this.props.action(e.currentTarget.value);
        //action should send the message to the server
      }
      this.setState({
        newMessage: ""
      });
    }
  }

  handleChange(e) {
    this.setState({
      newMessage: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="chat">
        <div id="msg-container" className="msg-container">
          {this.renderMessages()}
        </div>
        <div className="chat-input-div">
          <input
            onKeyDown={this.keyPress}
            onChange={this.handleChange}
            type="text"
            value={this.state.newMessage}
            className="chat-input"
          />
        </div>
      </div>
    );
  }
}

export default Chat;
