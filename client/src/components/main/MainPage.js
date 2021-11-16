import React, { Component } from 'react';


import './MainPage.css';
// const ReactCSSTransitionGroup = require('react-transition-group') ;

class MainPage extends Component {

    constructor(){
        super()
        this.state={
            isLoaded: false,
            show: true, 
            style: {
                opacity: 1,
                transition: 'all 3s ease'
            }
        }
    }

    componentDidMount() {
        this.state.isLoaded === 'false' 

        ? this.fadeIn()

        : this.setState({
            show: false
        })
    }

    fadeIn() {
        this.setState({
            style: {
                opacity: 0,
                transition: 'all 2s ease',

            }
            
            
        })
    
    }


    render() {
        return (
        //   <ReactCSSTransitionGroup 
        //   transitionName="main"
        //   transitionAppear={true}
        //   transitionEnter={true}
        //   >
             
              <div className="jumbotron main-page">
                 <div className="row top-row">
                    <div className="col"></div>
                    <div className="col"><h1 className="mainPage-title" id="title1" style={this.state.style}>I'm Guy.</h1></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"><h2 className="mainPage-paragraph" id="title2">I design beautiful things.</h2></div>
                    <div className="col"></div>
                </div>  
                <div className="row">
                    <div className="col"></div>
                    <div className="col"><button type="button" className="btn btn-lg work-button">My Work  <i class="fas fa-sign-in-alt"></i> </button></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div> 
            </div>
        //   </ReactCSSTransitionGroup>  
            
        )
    }
}

export default MainPage