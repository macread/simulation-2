import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMortRent } from '../../ducks/reducer';

class Step3 extends Component {

    constructor() {
        super()
            
            this.state = {
                mortgage: 0,
                rent: 0
            }

            this.addHouse = this.addHouse.bind(this);
    }

    componentDidMount(){
        if (this.props.mortgage !== 0) {
            this.setState({
                mortgage: this.props.mortgage,
                rent: this.props.rent,
            })
        }
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


function mapStateToProps(state){
    console.log(state);
    return {
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStateToProps, { addMortRent })(Step3)