import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LeftNav from './LeftNav';
import UserList from './UserList';
import UserDetail from './UserDetail';
import UserAdd from './UserAdd';

export default class User extends React.Component {
  render (){
    return <main className="main user">
      <LeftNav />
      <Switch>
        <Route path='/users' exact component={UserList} />
        <Route path='/users/add' component={UserAdd} />
        <Route path='/users/detail/:userId' component={UserDetail} />
      </Switch>
    </main>
  }
}