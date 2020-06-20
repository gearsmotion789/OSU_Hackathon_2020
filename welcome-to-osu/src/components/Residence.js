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
                    <p id='residenceText'>> <u>Living-Learning Communities</u></p>
                    <p id='residenceText'>> <u>Special Interest Communities</u></p>
                    <p id='residenceText'>> <u>See all OSU Residence Halls</u></p>
                    <p id='residenceBulletPoint'>> Off-Campus:</p>
                    <p id='residenceText'>> <u>Apartments</u></p>
                    <p id='residenceText'>> <u>Houses for Rent</u></p>
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
