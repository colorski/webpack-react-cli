import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LeftNav from './LeftNav';
import UserList from './UserList';
import UserDetail from './UserDetail';
import UserAdd from './UserAdd';

export default class User extends React.Component {
    render (){
        const {match} = this.props;
        return <main className="main user">
            <LeftNav />
            <section className="user-block">
                <Switch>
                  <Route path='/users' exact component={UserList} />
                  <Route path='/add' exact component={UserAdd} />
                  <Route path='list/detail/:userId' component={UserDetail} />
                </Switch>
            </section>
        </main>
    }
}