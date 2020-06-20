import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css'

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <header className="header" id="navbar">

          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="/"><li>Home</li></a>
              <a href="/classes"><li>Classes</li></a>
              <a href="/tips"><li>Tips</li></a>
              <a href="/food"><li>Food</li></a>
              <a href="/health"><li>Health</li></a>
              <a href="/guidance"><li>Guidance</li></a>
            </ul>
          </div>

          <a href='/'>
            <img className = "beaver" src = {require("../assets/beaverLogo.png")} alt = "Website Logo"/>
            {/* onClick={this.scrollToTop} */}
          </a>

        <div className = "navitem nav1">
          <a href="/majors">
            <button class = "navbtn">Careers & Majors</button>    
          </a>      
        </div>

        <div className = "navitem nav2">
          <a href="/residence">
            <button class = "navbtn">Residence Options</button>    
          </a>      
        </div>

        <div className = "navitem nav3">
          <a href="/financial">
            <button class = "navbtn">Financial Aid</button>    
          </a>      
        </div>

        {/* <div className = "navitem nav1">
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button class = "navbtn">Careers & Majors</button>
          </Link>            
        </div>

        <div className = "navitem nav2">
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button class = "navbtn">Residence Options</button>
          </Link>            
        </div> */}

        

      </header>
    );
  }
}
