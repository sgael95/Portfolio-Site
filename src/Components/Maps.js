import React from "react";

import MapContainer from "./MapContainer";

class Maps extends React.Component {
  render() {
    return (
      <div className="map-container">
        <div className="row h-100 w-100 p-1">
          <div className="col-md-12">
            <MapContainer lat={29.890661} lng={-97.91153} />
          </div>
        </div>
      </div>
    );
  }
}

export default Maps;
