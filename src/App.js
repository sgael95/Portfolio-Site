import React from "react";
import SplashPage from "./Components/SplashPage";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ProjectsPage from "./Components/ProjectsPage";
import ContactPage from "./Components/ContactPage";
import Maps from "./Components/Maps";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timePassed: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 4000);
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }

  render() {
    if (!this.state.timePassed) {
      return <SplashPage />;
    } else {
      return (
        <div className="app-container">
          <NavBar />
          <HomePage />
          <ProjectsPage />
          <AboutPage />
          <Maps />
          <ContactPage />
        </div>
      );
    }
  }
}

export default App;
