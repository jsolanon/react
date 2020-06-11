import React, { Component } from 'react';
import User from './users';

class Games extends Component {
    action = (n: String) => {
        console.log("Clicked: ", n);
    }

    render() {
        const name: String = 'test';

        return (
            <div>
                Games Component: {name}
                <User name='Julio' action={this.action} ></User>
            </div>
        );
    }
}

export default Games;