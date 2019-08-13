// every component needs this import

import React, { Component } from 'react';

class Header extends Component {
    render() {
        //return is what will be wrong on the dom 
        return (
            <h1>React Actors</h1>
        )
    }
}

export default Header;