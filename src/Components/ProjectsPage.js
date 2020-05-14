import React from "react";
import pImage1 from "../Images/parkwithusvalet.png";
import pImage2 from "../Images/luckynight.png";
import pImage3 from "../Images/maching-game.png";

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { initialState: false };
    this.showInfo = this.showInfo.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
  }

  showInfo(e) {
    e.target.style.background = "blue";
  }

  hideInfo(e) {
    e.target.style.background = "grey";
  }

  render() {
    return (
      <div className="projects-page container-fluid" id="projects">
        <div className="row d-flex justify-content-md-center">
          <div className="col-md-12 projects-jumbo">
            <h1 className="text-white">Notable Projects</h1>
          </div>
        </div>

        <div className="projects-section container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card-flip">
                <div className="flip">
                  <div className="front">
                    <div className="card bg-dark h-100">
                      <img src={pImage1} alt="parkwithus ui view"></img>
                      <div className="card-block">
                        <h4 className="card-title text-white">
                          ParkWithUsValet
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="back">
                    <div className="card h-100 justify-content-center align-self-center">
                      <div className="card-block">
                        <h4 className="card-title">ParkWithUsValet</h4>
                        <h6 className="card-subtitle text-muted">
                          React + Redux web app
                        </h6>
                      </div>
                      <div className="card-block">
                        <p className="card-text">
                          Application is created with MERN(Mongodb, Express,
                          React and Node) stack. The project is Implemented
                          using technologies such as Redux, Webpack, Bootstrap 4
                          and Babel. This project is currently deployed on an
                          Amazon AWS EC2 instance.
                        </p>
                        <p className="text-black">
                          Admin user can be viewed with: Username = "admin" and
                          Password = "@dm1n2n1md@"
                        </p>
                        <div className="sm">
                          <a
                            href="https://github.com/sgael95/ParkWithUsValet-Frontend"
                            target="_blank"
                            className="mr-2"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                          <a
                            href="http://www.parkwithusvalet.com"
                            target="_blank"
                          >
                            Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-flip">
                <div className="flip">
                  <div className="front">
                    <div className="card bg-dark h-100">
                      <img src={pImage2} alt="luckynight ui view"></img>
                      <div className="card-block">
                        <h4 className="card-title text-white">Lucky Night</h4>
                      </div>
                    </div>
                  </div>
                  <div className="back">
                    <div className="card h-100 justify-content-center align-self-center">
                      <div className="card-block">
                        <h4 className="card-title">Lucky Night</h4>
                        <h6 className="card-subtitle text-muted">
                          Java Application
                        </h6>
                      </div>
                      <div className="card-block">
                        <p className="card-text">
                          Lucky Night is a java application designed to simulate
                          a game of blackjack. This program was built in the
                          span of two weeks with a group of four during a four
                          week summer course. The application is built using a
                          Model View Controller architecture. The model of the
                          application was built using object oriented
                          principles. The view is developed using the spring
                          framework.
                        </p>
                        <div className="sm">
                          <a
                            href="https://github.com/sgael95/LuckyNight"
                            target="_blank"
                            className="mr-2"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-flip">
                <div className="flip">
                  <div className="front">
                    <div className="card bg-dark h-100">
                      <img src={pImage3} alt="super matcher ui view"></img>
                      <div className="card-block">
                        <h4 className="card-title text-white">Super Matcher</h4>
                      </div>
                    </div>
                  </div>
                  <div className="back">
                    <div className="card h-100 justify-content-center align-self-center">
                      <div className="card-block">
                        <h4 className="card-title">Super Matcher</h4>
                        <h6 className="card-subtitle text-muted">
                          Java Application
                        </h6>
                      </div>
                      <div className="card-block">
                        <p className="card-text">
                          Super Matcher is a java application built with a group
                          of five during my sophomore year of college. This
                          application was developed using the spring framework
                          for the GUI. The application uses a timer to allow a
                          quick view of the map then changes the faces and sets
                          another timer for the game. The object of the game is
                          to match as many cards as possible within the given
                          time constraint.
                        </p>
                        <div className="sm">
                          <a
                            href="https://github.com/sgael95/Matching-Game"
                            target="_blank"
                            className="mr-2"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
