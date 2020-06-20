import React, { Component } from 'react';
import "./Launch.css";

export default class Launch extends Component{
  render(){
    return (
      <div className = "app">
        <div className = "slide" id="section1">
          <div className="content">
            <div className = "SpaceLaunch">
             <div>Get Ready to Launch at OSU</div>
             <button className = "GetStarted"> Get Started</button>
            </div>
             <div className = "NewStudents">
                Making it easy for new and transfer
                students joining the Beaver family!
              </div>
             <div className = "DiscoverPath">Discover your path
              <div>- Find your major</div>
              <div>- Engage in exciting acticities</div>
              <div>- Explore financial aid options</div>
             </div>
          </div>
        </div>
        <div className = "slide" id = "section1-5">
          <div className = "underline launch_title">Getting Started</div>
          <div>1. Choose a path that you enjoy</div>
          <div className = "launch-getstarted-btn-containers">
            <button className = "launch-getstarted-btns">Select a Major</button>
          </div>
          <div>2. Register for classes</div>
          <div className = "launch-getstarted-btn-containers">
            <button className = "launch-getstarted-btns">Pick Classes</button>
          </div>
          <div>3. Apply for the OSU scholarship</div>
          <div className = "launch-getstarted-btn-containers">
            <button className = "launch-getstarted-btns">Apply for aid</button>
          </div>
          <div>4. Learn about pace/style of OSU</div>
          <div className = "launch-getstarted-btn-containers">
            <button className = "launch-getstarted-btns">View Class Tips</button>
          </div>
        </div>
        <div className = "slide" id="section2">
          <div className = "greyback">
            <div className = "Majors">Majors</div>
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
            <button className = " btn outlineBtn moreoptions">
              See More Options
            </button>
            <div id = "csimgcontainer">
              <img id = "csimg" src ={require('../assets/comp-cover.png')}></img>
            </div>
          </div>
        </div>
        <div  className = "slide" id="section3">
          <div id = "activities">
            <div>
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
            <button className = 'btn outlineBtn moreclubs'> Check out More Clubs</button>
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
