import React from 'react';
import { Link } from 'react-router-dom';
import TextView from './TextView'

export default class Home extends React.Component {
    render (){
        return <main className="main">
            <pre>
                <p>webpack :  ^4.29.3</p>
                <p>react :  ^16.8.1</p>
                <p>react-router-dom :  ^4.3.1</p>
            </pre>
            <hr />
            <h2>react-router-dom</h2>
            <p><Link to="/users">Go to Users page from here.</Link></p>
            <p><Link to="/users/list/detail/2">Go to User-2 Detail page from here.</Link></p>
            <hr />
            <TextView text="hello world!" />
        </main>
    }
}