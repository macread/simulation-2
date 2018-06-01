import React, { Component } from 'react';
import House from '../house/House'
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div className='Dashboard'>
                <h1>Dashboard</h1>  
                <House />
                <Link to={'/wizard'}><button>Add New Property</button></Link>
            </div> 
        )
    }
}

export default (Dashboard)