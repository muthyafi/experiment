import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <React.Fragment>
        <span>About</span>
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