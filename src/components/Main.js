import React, { PropTypes } from 'react';
// import { Link, IndexLink } from 'react-router';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar bsStyle="inverse" >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">App</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav bsStyle="pills" activeKey={1} onSelect={(a,b) => console.log('aa',a,b)}>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1} href="/">Home</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/app">
              <NavItem eventKey={2} href="/app" title="Item">App</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/about">
              <NavItem eventKey={3} href="/about" disabled>About</NavItem>
            </IndexLinkContainer>
          </Nav>
        </Navbar>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element
};

export default Main;
