import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/about">About</Link>
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
