import React from 'react';
import "./waiting.css";
import Chat from '../chat/chat'
import ProfileIcon from '../../profile/profile_icon'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Waiting extends React.Component {

    render() {
        return(
            <div className="waiting-room">
                <div className="waiting-room-profiles">
                    <ProfileIcon users={this.props.users} />
                    {/* <button className="waiting-room-ready2">Ready</button> */}
                    {/* <button className="btn btn-info">Ready</button> */}
                    <div className="ready-button-div">
                        <Button variant="warning outline-light" className="waiting-leave">Leave</Button>
                        <Button variant="warning outline-light">Ready</Button>
                    </div>
                </div>
                {/* <div className="waiting-room-ready-button">
                    <button>Ready</button>
                </div> */}
            </div>
        )
    }
}

export default Waiting;