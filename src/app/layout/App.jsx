import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/navBar/NavBar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;

// This the normal css way of creating a button. The below Semantic-UI React method
// <button className="ui icon button">
//   <i className="smile icon" /> CSS Button
// </button>
// <Button icon="smile" content="React Button" />
