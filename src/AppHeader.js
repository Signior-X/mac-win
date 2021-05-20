import React from "react";

import logo from './logo.svg';

class AppHeader extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Priyam",
    }
  }

  render() {
    return (
      <header className="App-header">
        <div className="left">
          <div className="option">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="option">File</div>
          <div className="option">Edit</div>
          <div className="option">View</div>
          <div className="option">Go</div>
        </div>
        <div className="right">
          <div className="option">
            <img src="img/arrow-down.png" alt="Show dropdown menu" style={{ width: "20px" }} />
          </div>
          <div className="option">
            <div className="battery">
              <div className="body">
                <div className="charging"></div>
              </div>
              <div className="terminal"></div>
            </div>
          </div>
          <div className="option">12:00 AM</div>
        </div>
      </header>
    )
  }
}

export default AppHeader;