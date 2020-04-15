import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {width: '50%',
                   height: '50%'};

class StoreMap extends Component{
    render(){
        return(
            <Map 
                google={this.props.google}
                zoom={18}
                style={mapStyles}
                initialCenter={{lat: 40.667843, lng:-73.402199}}
            />
        );
    }
}

export default GoogleApiWrapper({apiKey: process.env.REACT_APP_GOOGLE_API_KEY})(StoreMap)
