import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return(
      <React.Fragment>
        <Link to='/'>
          <button>
            Home
          </button>
        </Link>
      </React.Fragment>
    )
  }
}

export default About;