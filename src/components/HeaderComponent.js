import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.State={

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://javaguiges.net" className="navbar-brand">Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}



export default HeaderComponent;