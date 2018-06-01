import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
    constructor() {
    super()
        
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
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
        this.setState({ zipcode: val })
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
                <Link to={'/'}><button>Cancel</button></Link>
            </div> 
        )
    }
}

export default (Wizard)