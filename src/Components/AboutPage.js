import React from "react";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { initialState: false };
  }

  render() {
    return (
      <div className="about-container container-fluid" id="about">
        <div className="about-padding">
          <div className="about-section">
            <h1 className="text-white">About Me</h1>
            <p className="text-white">
              I am a recent college graduate from Texas State University with a
              B.S. in Computer Science and a minor in Applied Mathematics.
              Originally born in San Antonio but moved to San Marcos, TX to
              attend university. Following that I moved to Austin, TX in August
              of 2019. I am a naturally curious individual and thoroughly enjoy
              learning and problem solving, for these reasons I am very eager to
              start my journey into the world of software and technology.
            </p>
            <div className="about-fade"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
