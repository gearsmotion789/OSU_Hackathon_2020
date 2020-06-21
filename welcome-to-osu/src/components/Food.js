import React, { Component } from 'react';
import './Food.css'

export default class Food extends Component{
  render(){
    return (
        <div>
            <div class='grid-parent foodSection'>
                    <div>
                        <p id='foodTitle'>Learn about the food OSU has to offer</p>
                        <img class='foodImg' src={require('../assets/food.png')}/>
                    </div>

                    <div class='foodBox'>
                        <p id='foodDescription'>
                            Everyone needs food, and the OSU campus
                            has a wide selection of exquisite meal options
                            to select from, ranging from Italian dishes to
                            Asian cuisines to American barbeque.
                        </p>
                        <a href = "https://food.oregonstate.edu/" target="_blank">
                            <button class="btn outlineBtn restaurantBtn">See Restaurants</button>
                        </a>
                    </div>
            </div>

        </div>
    );
  }

}
