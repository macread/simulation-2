import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addHouse } from '../../ducks/reducer';

class Step1 extends Component {
    constructor() {
        super()
            
        this.state = {
            name: '',
            address: '',
            city: '',
            st: '',
            zip: ''
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
        let {name, address, city, st, zip} = this.state;
        this.props.addHouse({
            name: name,
            address: address,
            city: city,
            st: st,
            zip: zip
        });
    }


    render() {
        return (
            <div className='Step1'>
                <p>Location Name:</p><input type='' className='' onChange={ ( e ) => this.updateLocationName( e.target.value ) }/>

                <p>Address:</p><input type='' className='' onChange={ ( e ) => this.updateAddress( e.target.value ) }/>

                <p>City:</p><input type='' className='' onChange={ ( e ) => this.updateCity( e.target.value ) }/>

                <p>State:</p><input type='' className='' onChange={ ( e ) => this.updateState( e.target.value ) }/>

                <p>ZIP Code:</p><input type='' className='' onChange={ ( e ) => this.updateZipCode( e.target.value ) }/>
                
                <hr />
                <Link to={'/wizard/step2'}><button onClick={()=>this.addHouse()}>Next Step</button></Link>
                
            </div> 
        )
    }
}

function mapStateToProps(state){
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        st: state.st,
        zip: state.zip
    }
}

export default connect(mapStateToProps, { addHouse })(Step1)