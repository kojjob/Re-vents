import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="main">
          <NavBar/>
          <EventDashboard/>
        </Container>
      </div>
    );
  }
} 

export default App;
