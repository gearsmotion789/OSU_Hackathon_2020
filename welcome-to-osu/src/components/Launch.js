import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import "./Launch.css";

export default class Launch extends Component{
  render(){
    return (
      <div className = "app">
        <div className = "slide" id="section1">
          <div className="content">
            <div className = "SpaceLaunch">
             <div id = "get Ready">Get Ready to Launch at OSU</div>
             <Link activeClass="active" to="section1-5"
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={500}>
               <button className = "GetStarted"> Get Started</button>
             </Link>
            </div>
             <div className = "NewStudents">
                Making it easy for new and transfer
                students joining the Beaver family!
              </div>
             <div className = "DiscoverPath"> <div className = "underline">Discover your path</div>
              <div>- Find your major</div>
              <div>- Engage in exciting acticities</div>
              <div>- Explore financial aid options</div>
             </div>
          </div>
        </div>
        <div className = "slide" id = "section1-5">
          <div className = "underline launch_title launch-titles" id = "orangepart">Getting Started</div>
          <div>1. Choose a path that you enjoy</div>
          <div className = "launch-getstarted-btn-containers">
          <Link activeClass="active" to="section2"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
            <button className = "launch-getstarted-btns">Select a Major</button>
            </Link>
          </div>
          <div>2. Register for classes</div>
          <div className = "launch-getstarted-btn-containers">
            <a href = "/classes">
              <button className = "launch-getstarted-btns">Pick Classes</button>
            </a>
          </div>
          <div>3. Apply for the OSU scholarship</div>
          <div className = "launch-getstarted-btn-containers">
            <a href = "/financial">
              <button className = "launch-getstarted-btns">Apply for aid</button>
            </a>
          </div>
          <div>4. Learn about pace/style of OSU</div>
          <div className = "launch-getstarted-btn-containers">
            <a href = "/tips">
              <button className = "launch-getstarted-btns">View Class Tips</button>
            </a>
          </div>
        </div>
        <div className = "slide" id="section2">
          <div className = "greyback">
            <div className = "Majors launch-titles">Majors</div>
            <div className = "inline">
              <div> - Accountancy</div>
              <div> - Bioengineering</div>
              <div> - Botany</div>
              <div> - Chemical Engineering</div>
              <div> - Computer Science</div>
              <div> - Construction Engineering Management</div>
            </div>
            <div className = "inline">
              <div > - Digital Communications Arts</div>
              <div> - Education</div>
              <div> - Electrical and Computer Engineering</div>
              <div> - Energy Systems Engineering</div>
              <div> - Fisheries and Wildlife science</div>
              <div> - Forestry</div>
            </div>
          </div>
          <div className = "bottomportion">
            <div id = "over100majors">
              Over 100+ majors
            </div>
            <a href = "/majors">
              <button className = " btn outlineBtn moreoptions">
                See More Options
              </button>
            </a>
            <div id = "csimgcontainer">
              <img id = "csimg" src ={require('../assets/comp-cover.png')}></img>
            </div>
            <hr className = "temp"/>
          </div>

        </div>
        <div  className = "slide" id="section3">
          <div id = "activities">
            <div className = "act-titles launch-titles">
              Activities
            </div>
            <div className = "inline">
              <div>- Mars Rover Robotics Club</div>
              <div>- Aerial Robotics Club</div>
              <div>- Underwater Robotics Club</div>
              <div>- Drone Racing Club</div>
            </div>
            <div className = "inline">
              <div>- Radio Club</div>
              <div>- Overclock Club</div>
              <div>- Security Club</div>
            </div>
            <div className = "inline">
            <div className = "clubstext">Over 100+ Clubs</div>
            <div>to Join</div>
            <div id = 'clubsbuttoncontainer'>
            <a href = "https://sli.oregonstate.edu/find-organization">
              <button className = 'btn outlineBtn moreclubs'> Check out More Clubs</button>
            </a>
            </div>
            </div>
          </div>
          <div id = "finalportion">
           <div className = "inline launch_imgs">
            <img id = "launch-clubs" src = {require('../assets/clubImages.png')}></img>
           </div>
          </div>
        </div>
      </div>
    );
  }

}
