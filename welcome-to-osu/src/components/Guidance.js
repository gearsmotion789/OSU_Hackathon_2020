import React, { Component } from 'react';
import './Guidance.css'

export default class Guidance extends Component{
  render(){
    return (
        <div>
            <div className='guidanceTitle'>Take advantage of all the helpful resources OSU has to offer!</div>
            <div class='grid-parent'>
                <div>
                    <div class='guidanceText'>Check in with advisors</div>
                    <div class='guidanceLeftText'>for help with your major.</div>
                    <img class='guidanceImage' width="448" height="263" src={require('../assets/advising.png')} />
                    <a href="https://catalog.oregonstate.edu/advising/" target="_blank">
                        <button class="guidancebtn">Academic Advising</button>
                    </a>
                    <div class='guidanceText'>Get help from tutors that took</div>
                    <div class='guidanceLeftText'>the same classes you're taking.</div>
                    <img class='guidanceImage' width="448" height="263" src={require('../assets/tutoring.png')} />
                    <a href="https://catalog.oregonstate.edu/tutoring-student-support-services/" target="_blank">
                        <button class="guidancebtn">Tutoring</button>
                    </a>
                </div>
                <div>
                    <div class='guidanceText'>Get support from outreach</div>
                    <div class='guidanceLeftText'>counselors.</div>
                    <img class='guidanceImage' width="448" height="263" src={require('../assets/counselor.png')} />
                    <a href="https://counseling.oregonstate.edu/main/our-services" target="_blank">
                        <button class="guidancebtn">Counseling</button>
                    </a>
                    <div class='guidanceText'>Learn about and get in touch</div>
                    <div class='guidanceLeftText'>with your local TAs.</div>
                    <img class='guidanceImage' width="448" height="263" src={require('../assets/ta.png')} />
                    <a href="https://catalog.oregonstate.edu/regulations/" target="_blank">
                        <button class="guidancebtn">TA Office Hours</button>
                    </a>
                </div>
            </div>
            
        </div>
    );
  }

}
