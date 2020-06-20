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
             <div className = "GetStarted"> Get Started</div>
            </div>
             <div className = "NewStudents">
                Making it easy for new and transfer
                students joining the Beaver family!U
              </div>
             <div className = "DiscoverPath">Discover your path
              <div>- Find your major</div>
              <div>- Engage in exciting acticities</div>
              <div>- Explore financial aid options</div>
             </div>
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
            <button id = "moreoptions">
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
           <div className = "inline imgContainers">
            <img src = {require('../assets/robotics.png')}></img>
           </div>
           <div className = "inline imgContainers">
            <img src= {require('../assets/racecar.png')}></img>
           </div>
          </div>
        </div>
      </div>
    );
  }

}
