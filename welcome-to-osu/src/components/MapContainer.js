import React, { Component } from 'react';
import './Residence.css'
import { Map, GoogleApiWrapper } from 'google-maps-react';
const googleMapsKey = "require('../credentials/googleMaps').googleMapsKey";

const mapStyles = {
  position: 'absolute',
  width: '698px',
  height: '550px',
};

export class MapContainer extends Component {
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 44.564,
            lng: -123.279
          }}
        />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsKey
})(MapContainer);
