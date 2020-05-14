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
            <button type="button" className="btn btn-outline-light">
              Source Code
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
