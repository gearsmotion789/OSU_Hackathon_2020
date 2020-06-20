import React, { Component } from 'react';
import './Health.css'

export default class Health extends Component{
  render(){
    return (
        <div>
            <div class='grid-parent studentHealthServicesSection'>
                    <div>
                        <p id='title'>Student Health Services</p>
                        <button class="btn outlineBtn btn1">Check out more information</button>
                        <p id='txt1'>Also has a pharamcy at the Plageman Student Health Center (PSHC) at 108 SW Memorial Place</p>
                        <button class="btn outlineBtn btn2">Find out more about fees, insurances, and forms</button>
                    </div>

                    <div>
                        <p id='title2'><u>Variety of Services, including:</u></p>
                        <ul id='list'>
                            <li>Allergy clinic</li>
                            <li>Immunization clinics</li>
                            <li>Nutritional services</li>
                            <li>Physical therapy</li>
                            <li>Sexual assault nurse examiner</li>
                            <li>Sports Medicine</li>
                            <li>And much more!</li>
                        </ul>
                    
                    </div>
            </div>

            <div class='gymSection'>
                <div>
                    <p id='title'>Gym</p>
                    <button class="btn outlineBtn btn1">Check out more info</button>
                </div>

            </div>
        </div>
    );
  }

}
