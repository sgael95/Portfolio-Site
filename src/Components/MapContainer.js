import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import Data from "../config";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onMapClicked() {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };
    const darkTheme = [
      { elementType: "geometry", stylers: [{ color: "#2b2b2b" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#2b2b2b" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#9c9c9c" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#e8e8e8" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#e8e8e8" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#9c9c9c" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#e8e8e8" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ];

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={9}
          style={mapStyles}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
          styles={darkTheme}
          onClick={(e) => this.onMapClicked}
        >
          <Marker
            position={{
              lat: 29.42412,
              lng: -98.49363,
            }}
            onClick={(e) => this.onMarkerClick}
          />
          <Marker
            position={{
              lat: 29.890661,
              lng: -97.91153,
            }}
            onClick={(e) => this.onMarkerClick}
          />
          <Marker
            position={{
              lat: 30.266926,
              lng: -97.750519,
            }}
            onClick={(e) => this.onMarkerClick}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: Data.googleAPIKey,
})(MapContainer);
