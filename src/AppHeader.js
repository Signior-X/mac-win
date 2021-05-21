import React from "react";

import logo from './logo.svg';

class Battery extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      batteryPercentage: 0.5,
      batteryCharging: false,
    }

    // Global reference variables
    this.myBattery = {};
    this.myBatteryPercentListener = this.batteryPercentChangeListener;
    this.myBatteryChargeListener = this.batteryChargeChangeListener;
  }

  batteryPercentChangeListener = () => {
    console.log("Battery change", this.myBattery.level);

    this.setState({ batteryPercentage: this.myBattery.level });
  }

  batteryChargeChangeListener = () => {
    console.log("charging change", this.myBattery.charging);

    this.setState({ batteryCharging: this.myBattery.charging });
  }

  componentDidMount() {
    navigator.getBattery().then((bat) => {
      console.log("Current Battery", bat.level, bat.charging);

      this.setState({ batteryPercentage: bat.level, batteryCharging: bat.charging });

      // Storing a reference to myBattery
      this.myBattery = bat;

      bat.addEventListener('levelchange', this.myBatteryPercentListener);
      bat.addEventListener('chargingchange', this.myBatteryChargeListener);
    });
  }

  componentWillUnmount() {
    this.myBattery.removeEventListener('levelchange', this.myBatteryPercentListener);
    this.myBattery.removeEventListener('charginchange', this.myBatteryChargeListener);
  }

  render() {
    const batteryPercentage = this.state.batteryPercentage;
    const batteryTranslateX = (1 - batteryPercentage) * 100;
    const batteryCharging = this.state.batteryCharging;
    const color = batteryCharging ? "green" : "white";

    return (
      <div className="option">
        <div className="battery">
          <div className="body">
            <div className="charging" style={{ transform: `translateX(-${batteryTranslateX}%)`, backgroundColor: `${color}` }}></div>
          </div>
          <div className="terminal"></div>
        </div>
      </div>
    )
  }
}

class Time extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      time: "12:00",
    }

    this.timeChangeInterval = "";
  }

  componentDidMount() {
    let oldTimeString = "";

    // Starting an interval that checks the time
    this.timeChangeInterval = setInterval(() => {
      const newTime = new Date();
      const newTimeString = newTime.toTimeString().substr(0, 5);

      if (!oldTimeString || oldTimeString !== newTimeString) {
        oldTimeString = newTimeString;
        this.setState({ time: newTimeString });
      }
    }, 1000);  // Lag time of time change update is max 1 second
  }

  componentWillUnmount() {
    clearInterval(this.timeChangeInterval);
  }

  render() {
    const time = this.state.time;
    return (
      <div className="option"> {time} </div>
    )
  }
}

class RightArrowDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDownOpen: false
    }
  }

  handleDropDownClick = () => {
    this.setState({ dropDownOpen: !this.state.dropDownOpen });
  }

  render() {
    const dropDownOpen = this.state.dropDownOpen;

    return (
      <div className={`option ${dropDownOpen ? "active" : ""}`} onClick={this.handleDropDownClick}>
        <img className={`dropdown-img ${dropDownOpen ? "open" : ""}`} src="img/arrow-down.png" alt="Show dropdown menu" style={{ width: "20px" }} />
        <div className={`menu option-menu ${dropDownOpen ? "open" : ""}`} >
          Hello
        </div>
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
          <RightArrowDown />
          <Battery />
          <Time />
        </div>
      </header>
    )
  }
}

export default AppHeader;