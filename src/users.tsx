import React from 'react';

const Users = (props:any) => {
    return (
        <div>
            User list: {props.name}
            <button onClick= { (event) => props.action('hola') }>Submit</button>
        </div>
    );
};

export default Users;