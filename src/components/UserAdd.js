import React from 'react';
import TextView from './TextView'

export default class UserAdd extends React.Component {
  render (){
    return <section className="user-block">
      UserAdd page
      <hr />
      <TextView text="hello world!" />
    </section>
  }
}