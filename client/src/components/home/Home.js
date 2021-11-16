import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {CSSTransition, TransitionGroup } from 'react-transition-group';


import Navmenu from '../navbar/Navmenu';
import MainPage from '../main/MainPage';
import About from '../about/About';
import ProjectPage from '../projects/Projects';
import Contact from '../contact/Contact';

class Home extends Component {

    render() {

        return (
            <Router>
                <div>
             
                    <Navmenu />

                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<ProjectPage />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        )
    }

}


export default Home