import React from "react";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { initialState: false };
  }

  render() {
    return (
      <div className="contact-container" id="contact">
        <h1 className="text-white contact-header">Contact</h1>
        <div className="contact-page">
          <div className="container-fluid">
            <div className="row justify-content-center contact-row">
              <a
                href="https://www.linkedin.com/in/gael-sanchez/"
                target="_blank"
                className="btn btn-primary"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <h3>
                <a
                  href="https://www.linkedin.com/in/gael-sanchez/"
                  target="_blank"
                  className="text-white"
                >
                  &nbsp;linkedin
                </a>
              </h3>
            </div>
            <div className="row justify-content-center contact-row">
              <a href="mailto:sgael95@gmail.com" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
              </a>
              <h3>
                <a href="mailto:sgael95@gmail.com" className="text-white">
                  &nbsp;sgael95@gmail.com
                </a>
              </h3>
            </div>
            <div className="row justify-content-center contact-row">
              <a
                href="https://github.com/sgael95"
                className="btn btn-primary"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
              <h3>
                <a
                  href="https://github.com/sgael95"
                  className="text-white"
                  target="_blank"
                >
                  &nbsp;github
                </a>
              </h3>
            </div>
            <div className="row justify-content-center contact-row">
              <h3 className="btn btn-primary">
                <i className="fas fa-phone-square"></i>
              </h3>
              <h3>
                <a className="text-white">&nbsp;(210) 725-0106</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
