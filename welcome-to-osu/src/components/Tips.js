import React, { Component } from 'react';
import './Tips.css';

export default class Tips extends Component{
  render(){
    return (
      <div className = "takeclass takeclass-pagesize">
        <div className = "takeclass-title">Taking Classes at OSU:</div>
        <div className = "takeclass-sortabigfont">
          Classes at OSU are on the quarter system which means that each
          term is 11 weeks long. Week 10 is dead week and week 11 is finals
          week.
        </div>
        <div> There are four quarters in a year: </div>
        <div id = "takeclass-indent">
          <div>> Fall             (September 23rd, 2020 to December 4th, 2020)</div>
          <div>> Winter        (Jan 4th, 2021 to March 12th 2021)</div>
          <div>> Spring        (March 29th, 2021 to June 4th, 2021)</div>
          <div>> Summer     (with different sessions of varying length)</div>
        </div>
        <div className = "takeclass-btnContainer">
          <a href="https://registrar.oregonstate.edu/osu-academic-calendar" target="_blank">
            <button class = "btn outlineBtn takeclass-btn">View the OSU Academic Calander</button>
          </a>
        </div>
        <div className = "takeclass-sortabigfont">What to do and not to do when starting your 1st term</div>
        <div>> </div>
        <div className = "takeclass-inline">If you're fresh out of high school, you may be tempted to rush and take loads of
            classes, but this is not a good idea. Many students have tried to attack early on,
            but later crash, finding it difficult to achieve good grades. This is because they are
            overwhelmed with the load of homework, and testing that goes on.</div>
        <div>> </div>
        <div className = "takeclass-inline">As per the school's recommendation, your should limit your credits down to 15.</div>
        <div>> </div>
        <div className = "takeclass-inline">The best approach is to take it easy first, then gradually increase the difficulty.
            Perhaps start out with 4 classes, then take 5, and when you are comfortable, and
            then you can try to tackle more credits.</div>
      </div>
    );
  }

}
