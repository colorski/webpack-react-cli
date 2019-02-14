import React from 'react';
import TextView from './TextView'

export default class Product extends React.Component {
    render (){
        const { goBack } = this.props.history;
        return <main className="main">
            <div>Product</div>
            <hr />
            <span onClick={ goBack }>← Go back</span>
            <hr />
            <TextView text="hello world!" />
        </main>
    }
}