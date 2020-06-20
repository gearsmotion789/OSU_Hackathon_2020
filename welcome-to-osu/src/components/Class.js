import React, { Component } from 'react'
import './Class.css'

export default class Class extends Component {
  render(){
      return (
    <div className = "app">
        <div>
          <div className = "classTitle">
           <div>Learn How to Register for Classes</div>
           <div className = "classimgcontainer classimg1cont">
            <img className = "classLeftImage" width= "800"  height = "480" src = {require("../assets/class.png")} alt = "Lecture"></img>
           </div>
           <div className = "classOrangeBox">Figuring out how to register for classes isn't an easy task, but with this handy guide you'll be set up in a matter of minutes!</div>
          </div>
          <hr className = "classLine"></hr>
          <div className = "classProcess">
            <div className = "classStep">Step 1:</div>
            <div className = "classLeftInstruction classresponsive">Log into the <a class='myOSULink classresponsive' href="https://myosu.oregonstate.edu/" target="_blank">MyOSU</a>
            portal and click on the Student tab.</div>
            <div className = "classimgcontainer">
              <img className = "classImage" width= "1210"  height = "373" src = {require("../assets/MyOSU.png")} alt = "MyOSU"></img>
            </div>

            <div className = "classStep">Step 2:</div>
            <div className = "classInstruction">Find what classes you need to take by clicking MyDegrees under My Student Stuff.</div>
            <div className = "classStep">Step 3:</div>
            <div className = "classInstruction">Click on the What If tool to see what classes you need to take for your major.</div>
            <div className = "classimgcontainer">
              <img className = "classImage" width= "340"  height = "304" src = {require("../assets/mydegrees.png")} alt = "MyOSU"></img>
            </div>
            <div className = "classStep">Step 4:</div>
            <div className = "classInstruction">Narrow down the filter tool to your major and click the Process What-If tool.</div>
            <div className = "classimgcontainer">
              <img className = "classImage" width= "1112"  height = "209" src = {require("../assets/whatif.png")} alt = "whatif"></img>
            </div>
            <div className = "classStep">Step 5:</div>
            <div className = "classInstruction">Make note of all classes you plan to take for the upcoming term. Note that certain classes require prequisite classes to be taken beforehand.</div>
            <div className = "classStep">Step 6:</div>
            <div className = "classInstruction">Back on the MyOSU page, click on Scheduler under Registration Tools.</div>
            <div className = "classStep">Step 7:</div>
            <div className = "classInstruction">Select your term and the Corvaliis campus. Then click on Add Course.</div>
            <div className = "classimgcontainer">
              <img className = "classImage" width= "709"  height = "266" src = {require("../assets/scheduler.png")} alt = "scheduler"></img>
            </div>
            <div className = "classStep">Step 8:</div>
            <div className = "classInstruction">Add a course by selecting your subject and course. Then click Add Course.</div>
            <div className = "classimgcontainer">
              <img className = "classImage" width= "456"  height = "337" src = {require("../assets/addCourse.png")} alt = "addCourse"></img>
            </div>
            <div className = "classStep">Step 9:</div>
            <div className = "classInstruction">When done adding all your courses and breaks, scroll down and click Generate Schedules.</div>
            <div className = "classimgcontainer">
              <img className = "classImage" width= "863"  height = "160" src = {require("../assets/generateSchedule.png")} alt = "generateSchedule"></img>
            </div>
            <div className = "classStep">Step 10:</div>
            <div className = "classInstruction">Select a schedule you like, then click Send to Registration Cart.</div>
            <div className = "classimgcontainer">
              <img className = "classImage" width= "734"  height = "561" src = {require("../assets/sendToCart.png")} alt = "sendToCart"></img>
            </div>
            <div className = "classStep">Step 11:</div>
            <div className = "classInstruction">Lastly, click Register. You will be asked to provide a pin number which you will need to obtain from your advisor.</div>
            <div className = "classimgcontainer">
              <img className = "classImage" width= "582"  height = "172" src = {require("../assets/register.png")} alt = "register"></img>
            </div>
            <div className = "classStep">Step 12:</div>
            <div className = "classInstruction">Now you're done! You'll see all the classes you've registered for like the image shown here.</div>
            <div className = "classimgcontainer">
              <img className = "classImage" width= "961"  height = "221" src = {require("../assets/adddropclass.png")} alt = "adddropclass"></img>
            </div>
          </div>
        </div>
      </div>
      )
    }
}
