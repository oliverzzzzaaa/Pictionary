import React from 'react';
import { Link } from 'react-router-dom';
import './nav_bar.css'

class NarBar extends React.Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.logout();
    }


    render(){
        console.log(this.props)
        if (typeof currentUser === undefined) return null;
        return(
            <div className='nav-bar-main'>
                <Link to="/" className="navbar-logo">Home Logo</Link>
                <button className='nav-bar-logout' onClick={this.handleLogout} >
                    Bye!
                </button>
            </div>
        )
    }

}

export default NarBar;