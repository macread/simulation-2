import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addIMG } from '../../ducks/reducer';

class Step2 extends Component {

    constructor() {
        super()
            
            this.state = {
                imgURL: ''
            }
    }
    
    componentDidMount(){
        if (this.props.imgURL !== '') {
            this.setState({
                imgURL: this.props.imgURL
            })
        }
    }

    updateImgURL(val){
        this.setState({ imgURL: val })
    }

    addIMG(){
        this.props.addIMG(this.state.imgURL);
    }

    render() {
    
        return (
            <div className='Step2'>
                 <p>Image URL:</p><input type='' className='' value={this.state.imgURL} onChange={ ( e ) => this.updateImgURL( e.target.value ) }/>
                 <hr />
                 <Link to={'/wizard/step1'}><button>Previous Step</button></Link>
                 <Link to={'/wizard/step3'}><button onClick={()=>this.addIMG()}>Next Step</button></Link>
            </div> 
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return {
        imgURL: state.imgURL
    }
}

export default connect(mapStateToProps, { addIMG })(Step2)