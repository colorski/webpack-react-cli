import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class LeftNav extends React.Component {
    render (){
        return <nav className="user-nav">
            <NavLink exact to='/users'>UserList</NavLink>
            <NavLink exact to='/users/add'>UserAdd</NavLink>
            <NavLink exact to="/balabala">ErrorUrl</NavLink>
        </nav>
    }
}
export default withRouter(LeftNav)