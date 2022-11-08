import React from 'react';
import '../css/Home.css';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="homeParagraph">
        <h2>Welcome to our page!</h2>
        <p className="paragraph">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p className="paragraph">
          &quot;Lorem ipsum dolor sit amet,Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.&quot;
        </p>
      </div>
    );
  }
}

export default Home;
