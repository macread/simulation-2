import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    constructor() {
    super()
        
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            toDashboard: false
        }

        this.addHouse = this.addHouse.bind(this);
    }

    updateLocationName(val){
        this.setState({ name: val })
    }

    updateAddress(val){
        this.setState({ address: val })
    }

    updateCity(val){
        this.setState({ city: val })
    }

    updateState(val){
        this.setState({ state: val })
    }

    updateZipCode(val){
        this.setState({ zip: val })
    }

    addHouse(){
        let {name, address, city, state, zip } = this.state;
        axios.post('/api/house',
        {name: name,
        address: address,
        city: city,
        state: state,
        zip: zip}).then(() => this.props.history.push('/'))
    }

    render() {
        return (
            <div className='Wizard'>
                <h1>Wizard</h1>

                <p>Location Name:</p>
                    <input type='' className='' onChange={ ( e ) => this.updateLocationName( e.target.value ) }/>

                <p>Address:</p><input type='' className='' onChange={ ( e ) => this.updateAddress( e.target.value ) }/>

                <p>City:</p><input type='' className='' onChange={ ( e ) => this.updateCity( e.target.value ) }/>

                <p>State:</p><input type='' className='' onChange={ ( e ) => this.updateState( e.target.value ) }/>

                <p>ZIP Code:</p><input type='' className='' onChange={ ( e ) => this.updateZipCode( e.target.value ) }/>
                
                <hr />
                <button onClick={()=>this.addHouse()}>Complete</button>
                <Link to={'/'}><button>Cancel</button></Link>
            </div> 
        )
    }
}

export default (Wizard)