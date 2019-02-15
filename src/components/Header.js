import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render (){
        return <header>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/users" exact>Users</NavLink>
            <NavLink to="/products" exact>Products</NavLink>
        </header>
    }
}