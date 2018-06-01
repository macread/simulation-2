import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Step2 extends Component {

    constructor() {
        super()
            
            this.state = {
                imgURL: ''
            }
    }
    
    updateImgURL(val){
        this.setState({ imgURL: val })
    }

    render() {
    
        return (
            <div className='Step2'>
                 <p>Image URL:</p><input type='' className='' onChange={ ( e ) => this.updateImgURL( e.target.value ) }/>
                 <hr />
                 <Link to={'/wizard/step1'}><button>Previous Step</button></Link>
                 <Link to={'/wizard/step3'}><button>Next Step</button></Link>
            </div> 
        )
    }
}

export default (Step2)