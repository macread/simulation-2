import React, { Component } from 'react';
import House from '../house/House'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
    super()
        
        this.state = {
                houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount(){
        this.getInventory()
    }

    getInventory(){
        axios.get('/api/houses').then( results => {
            this.setState({ houses: results.data });
        });
    }

    deleteHouse(val){
        axios.delete(`api/house/${val}`).then( () => {
            this.getInventory();
        });
    }

    render() {
 
        return (
            <div className='Dashboard'>
                <h1>Dashboard</h1> 
                {this.state.houses.map( house => (
                        <House 
                            key={house.id} 
                            id={house.id} 
                            name={house.name} 
                            address={house.address}
                            city={house.city} 
                            state={house.state}
                            zip={house.zip}
                            imgURL={house.imgURL}
                            mortgage={house.mortgage}
                            rent={house.rent}
                            deleteHouse={this.deleteHouse}
                        />
                    ))}
                <hr />
                <Link to={'/wizard/step1'}><button>Add New Property</button></Link>
            </div> 
        )
    }
}

export default (Dashboard)