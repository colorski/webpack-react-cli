import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class LeftNav extends React.Component {
  render (){
    return <nav className="user-nav">
      <NavLink to='/users' exact>UserList</NavLink>
      <NavLink to='/users/add'>UserAdd</NavLink>
      <NavLink to="/balabala">ErrorUrl</NavLink>
    </nav>
  }
}
export default withRouter(LeftNav)