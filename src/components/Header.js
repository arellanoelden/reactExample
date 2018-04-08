import React from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends React.Component {
    render() {
        return(
            <nav>
              <IndexLink to="/" activeClassName="active">Home</IndexLink>
              <Link to="games" activeClassName="active">Games</Link>
              <Link to="chat" activeClassName="active">Chat</Link>
              <strong>{this.props.user}</strong>
            </nav>
        );
    }
}

export default Header;