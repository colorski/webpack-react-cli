import React from 'react';
import { Link } from 'react-router-dom';
import TextView from './TextView'

export default class UserDetail extends React.Component {
    render (){
        const { match, history } = this.props;
        return <div>
            UserDetail, UserId: <strong style={{fontWeight:'bold', color:'#f00'}}>{ match.params.userId }</strong>
                <hr />
                <span onClick={ history.goBack }>← Go back</span>
                <hr />
                <span><Link to="/products">Go to Products →</Link></span>
                <hr />
                <TextView text="hello world!" />
        </div>
    }
}