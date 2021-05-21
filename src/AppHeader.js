import React from "react";

import logo from './logo.svg';

class Battery extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      batteryPercentage: 0.5
    }

    // Global reference variables
    this.myBattery = {};
    this.myBatteryListener = this.batteryPercentChangeListener;
  }

  batteryPercentChangeListener = () => {
    console.log("Battery change", this.myBattery.level);

    this.setState({ batteryPercentage: this.myBattery.level });
  }

  componentDidMount() {
    navigator.getBattery().then((bat) => {
      console.log("Current Battery Level", bat.level);
      this.setState({ batteryPercentage: bat.level });

      // Storing a reference to myBattery
      this.myBattery = bat;

      bat.addEventListener('levelchange', this.myBatteryListener);
    });
  }

  componentWillUnmount() {
    this.myBattery.removeEventListener('levelchange', this.myBatteryListener);
  }

  render() {
    const batteryPercentage = this.state.batteryPercentage;
    const batteryTranslateX = (1 - batteryPercentage) * 100;

    return (
      <div className="battery">
        <div className="body">
          <div className="charging" style={{ transform: `translateX(-${batteryTranslateX}%)`, color: "blue" }}></div>
        </div>
        <div className="terminal"></div>
      </div>
    )
  }
}

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
            <Battery />
          </div>
          <div className="option">12:00 AM</div>
        </div>
      </header>
    )
  }
}

export default AppHeader;