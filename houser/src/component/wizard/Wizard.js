import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';



class Wizard extends Component {


    render() {
        return (
            <div className='Wizard'>
                <h1>Wizard</h1>
                <Switch>
                    <Route path='/wizard/step1' component={ Step1 } />
                    <Route path='/wizard/step2' component={ Step2 } />
                    <Route path='/wizard/step3' component={ Step3 } />
                </Switch>
                <Link to={'/'}><button>Cancel</button></Link>
            </div> 
        )
    }
}

export default (Wizard)