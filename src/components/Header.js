import React from 'react';

const Header = (props) => {
    return(
        <header className='w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
            <h1 className='f1'>RoboFriends</h1>
            {props.children}
        </header>
    );
}

export default Header;