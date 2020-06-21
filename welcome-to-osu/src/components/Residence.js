import React, { Component } from 'react';
import './Residence.css'
import MapContainer from './MapContainer'

export default class Residence extends Component{
  render(){
    return (
        <div>
            <div class='residenceSection1'>
                <div class='residenceBlackBox'>
                    <p id='residenceTitle'>Residence Options</p>
                    <p id='residenceBulletPoint'>> On-Campus:</p>
                    <a class='residenceLink' href="https://uhds.oregonstate.edu/housing/living-learning-communities" target="_blank">
                        <p id='residenceText'>> <u>Living-Learning Communities</u></p>
                    </a>
                    <a class='residenceLink' href="https://uhds.oregonstate.edu/residence-halls/information/special-interest-communities" target="_blank">
                        <p id='residenceText'>> <u>Special Interest Communities</u></p>
                    </a>
                    <a class='residenceLink' href="https://uhds.oregonstate.edu/housing/halls" target="_blank">
                        <p id='residenceText'>> <u>See all OSU Residence Halls</u></p>
                    </a>
                    <p id='residenceBulletPoint'>> Off-Campus:</p>
                    <a class='residenceLink' href="https://www.apartments.com/off-campus-housing/or/corvallis/oregon-state-university/" target="_blank">
                        <p id='residenceText'>> <u>Apartments</u></p>
                    </a>
                    <a class='residenceLink' href="https://www.rent.com/oregon/oregon-state-university-houses" target="_blank">
                        <p id='residenceText'>> <u>Houses for Rent</u></p>
                    </a>
                </div>
            </div>

            <div class='residenceSection2'>
                <p id='residenceMapTitle'><b>Search Places On and Near Campus:</b></p>
                <div class='residenceMap'>
                    <MapContainer/>
                </div>
                <button class="btn outlineBtn residenceMapBtn"><b>Map of OSU</b></button>
            </div>
        </div>
    );
  }

}
