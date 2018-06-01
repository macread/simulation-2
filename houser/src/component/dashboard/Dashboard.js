import React, { Component } from 'react';
import House from '../house/House'

class Dashboard extends Component {
    render() {
        return (
            <div className='Dashboard'>
                <h1>Dashboard</h1>  
                <House />
            </div> 
        )
    }
}

export default (Dashboard)