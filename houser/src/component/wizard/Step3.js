import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMortRent, cancel } from '../../ducks/reducer';

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
        this.setState({ rent: val })
    }
        
    addHouse(){
        let {name, address, city, st, zip, imgURL } = this.props;
        axios.post('/api/house',
        {name: name,
        address: address,
        city: city,
        state: st,
        zip: zip,
        imgURL: imgURL,
        mortgage: this.state.mortgage,
        rent: this.state.rent
        }).then(() => this.props.history.push('/')).then(()=> this.props.cancel())
    }

    render() {
    
        return (
            <div className='Step3'>
                 <p>Monthly Mortgage Amount:</p><input type='' className='' value={this.state.mortgage} onChange={ ( e ) => this.updateMortgageAmount( e.target.value ) }/>
                 <p>Desired Monthly:</p><input type='' className='' value={this.state.rent} onChange={ ( e ) => this.updateRentAmount( e.target.value ) }/>
                 <hr />
                 <Link to={'/wizard/step2'}><button>Previous Step</button></Link>
                <button onClick={()=>this.addHouse()}>Complete</button>
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
        zip: state.zip,
        imgURL: state.imgURL,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStateToProps, { addMortRent, cancel })(Step3)