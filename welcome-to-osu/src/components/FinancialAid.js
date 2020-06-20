import React, { Component } from 'react';
import './FinancialAid.css';
import ReactPlayer from "react-player";

export default class FinancialAid extends Component{
  render(){
    return (
      <div>
        <div className = "finaid-underheader">
          <div id ="finaid-takeadvantage">Take advantage of OSU Scholarships provided just for <span className = "underline">YOU</span> with...</div>
          <div className = "imgContainer finaid-scholardollar">
            <img src = {require("../assets/scholardollars.png")}></img>
          </div>
          <div className = "finaid-relative finaid-WhiteOnOrange finaid-upto10k"> Recieve up to $10,000+ in scholarships from OSU and connected providers</div>
          <div className = "finaid-OrangeOnWhite finaid-how-to-apply">Read this Guide to find out how to apply</div>
        </div>
        <div className = "finaid-bigpage finaid-pad">
          <div>Prerequisites</div>
          <div>- Make sure you have fulfilled and submitted your FAFSA application to OSU</div>
          <div className = "finaid-step">Step 1:</div>
          <div className = "finaid-extrapad">Go to <span className = "underline">ScholarDollars</span> and click Sign in </div>
          <div className = "imgContainer finaid-siteimgcontainer" >
            <img src = {require("../assets/scholardollarssite.png")}></img>
          </div>
          <div className = "finaid-step">Step 2:</div>
          <div className = "finaid-extrapad finaid-smaller-width">
            Sign in with your OSU email(XXXXXX@oregonstate.edu) and password.
            You will see a page that contains 2 applications. The general application
            asks for general information about who you are and what you've done.
            The second application will be a scholarshhip specific to your major. It will
            ask you about any internships or research experiences you've engaged in
            as well as your career objectives.
          </div>
          <div className = "imgContainer finaid-siteimgcontainer" >
            <img src = {require("../assets/scholardollarsapplication page.png")}></img>
          </div>
          <div className = "finaid-step">Step 3:</div>
          <div className = "finaid-extrapad finaid-small-width">
            Once you've fulfilled both applicatoins, simply click Submit.
             You may have to wait up to a year after the deadline before
             you recieve acceptance or declination of a scholarship opportunity.
          </div>
          <div className = "finaid-step">Step 4:</div>
          <div className = "finaid-extrapad finaid-small-width">
            To accept you scholarship, please watch the video below.
          </div>
          <div className = "imgContainer finaid-siteimgcontainer" >
            <ReactPlayer url="https://www.youtube.com/watch?v=P7RoTZgNtQ4&feature=emb_title" controls width='100%' height='100%' />
          </div>
        </div>
      </div>
    );
  }

}
