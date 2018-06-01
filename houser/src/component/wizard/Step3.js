import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Step3 extends Component {

    constructor() {
        super()
            
            this.state = {
                mortgage: 0,
                rent: 0
            }

            this.addHouse = this.addHouse.bind(this);
    }
    
    updateMortgageAmount(val){
        this.setState({ mortgage: val })
    }

    updateRentAmount(val){
        this.setState({ mortgage: val })
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
            <div className='Step3'>
                 <p>Monthly Mortgage Amount:</p><input type='' className='' onChange={ ( e ) => this.updateMortgateAmount( e.target.value ) }/>
                 <p>Desired Monthly:</p><input type='' className='' onChange={ ( e ) => this.updateRentAmount( e.target.value ) }/>
                 <hr />
                 <Link to={'/wizard/step2'}><button>Previous Step</button></Link>
                <button onClick={()=>this.addHouse()}>Complete</button>
            </div> 
        )
    }
}

export default (Step3)