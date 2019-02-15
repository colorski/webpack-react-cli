import React from 'react';

export default class Footer extends React.Component {
    render (){

      if (process.env.NODE_ENV === 'production') {
        console.log('This is in production mode!');
      }
      if (process.env.NODE_ENV === 'development') {
        console.log('This is in development mode!');
      }
      
      const { version } = this.props;
      return <div className="footer">
          <p>footer</p>
          <p>version: @{ version }</p>
      </div>
    }
}