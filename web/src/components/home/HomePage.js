import React, { Component } from "react";
import HeroShot from "../home/HeroShot";
import Welcome from "../home/Welcome";
import SectionActivities from "../home/SectionActivities";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeroShot />
        <Welcome />
        <SectionActivities />
      </div>
    );
  }
}

export default HomePage;
