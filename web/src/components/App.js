import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./common/Header/Narbar";
import HomePage from "./home/HomePage";
import GalleryList from "./gallery/GalleryList";
import DailyList from "./dailyLife/DailyList";
import LearningList from "./learning/LearningList";
import TravellingList from "./travelling/TravellingList";
import ContactUs from "./ContactUs";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar location={this.props.location} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/gallery" component={GalleryList} />
          <Route path="/dailylife" component={DailyList} />
          <Route path="/learning" component={LearningList} />
          <Route path="/travelling" component={TravellingList} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
      </div>
    );
  }
}

export default App;