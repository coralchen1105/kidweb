import React, { Component } from "react";
import HeroShot from "../home/HeroShot";
import Welcome from "../home/Welcome";
import SectionActivities from "../home/SectionActivities";
import Banner from "../common/Banner";
import RecentBlog from "../home/RecentBlog";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeroShot />
        <Welcome />
        <SectionActivities />
        <Banner />
        <RecentBlog />
      </div>
    );
  }
}

export default HomePage;
