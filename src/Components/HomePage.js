import React from "react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { initialState: false };
  }

  render() {
    return (
      <div className="home-page container-fluid" id="home">
        <div className="home-fade"></div>
        <div className="home-section">
          <div className="home-jumbo">
            <h1 className="text-white">Gael Sanchez</h1>
            <p className="text-white">Software Developer</p>
            <a
              className="btn btn-outline-light"
              href="https://github.com/sgael95/Portfolio-Site"
              target="_blank"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
