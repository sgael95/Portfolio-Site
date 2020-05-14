import React from "react";
import { Image, Jumbotron } from "react-bootstrap";
import "../Styles/splashpage.module.css";

class SplashPage extends React.Component {
  render() {
    return (
      <div className="container-fluid splashpage d-flex align-items-center">
        <div className="col-md-12 center">
          <h1 className="welcome-text splash-text-font pt-8">
            Welcome and Enjoy
          </h1>
        </div>
      </div>
    );
  }
}

export default SplashPage;
