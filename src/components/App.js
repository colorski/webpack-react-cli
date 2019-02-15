import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import User from './User';
import Product from './Product';
import UserAdd from './UserAdd';
import Footer from './Footer';
import d from '../data/data';
import './App.css';

export default class App extends React.Component {
    render (){
        return <BrowserRouter>
            <div className="app-wrap">
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/users' exact component={User} />
                    <Route path='/products' exact component={Product} />
                    {/* <Route path='/users/list/detail/:userId' exact component={UserDetail} />
                    <Route path='/users/add' exact component={UserAdd} /> */}
                    <Redirect to='/' />
                </Switch>
                <Footer version={d.version} />
            </div>
        </BrowserRouter>
    }
}

