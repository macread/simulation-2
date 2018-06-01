import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { cancel } from '../../ducks/reducer';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';



class Wizard extends Component {

    cancel(){
        this.props.cancel();
    }

    render() {
        return (
            <div className='Wizard'>
                <h1>Wizard</h1>
                <Switch>
                    <Route path='/wizard/step1' component={ Step1 } />
                    <Route path='/wizard/step2' component={ Step2 } />
                    <Route path='/wizard/step3' component={ Step3 } />
                </Switch>
                <Link to={'/'}><button onClick={()=>this.cancel()}>Cancel</button></Link>
            </div> 
        )
    }
}

function mapStateToProps(state){
    return {
        name: state.name,
    }
}

export default connect(mapStateToProps, { cancel })(Wizard)