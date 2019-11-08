import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
  };

  // Update app title after initial render
  componentDidMount() {
    document.title = `You have been clicked ${this.state.count} times...`;
    //use the window api to grab addevenetlistener to listen for any mousemove function
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  // Update app title after every state change
  componentDidUpdate() {
    document.title = `You have been clicked ${this.state.count} times...`;
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  //callback function
  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    });
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  };

  render() {
    return (
      <>
        <h2>Counter</h2>
        <button onClick={this.incrementCount}>
          I was clicked {this.state.count} times{" "}
        </button>
        <h2>Toggle Light</h2>
        <div
          style={{
            height: "50px",
            width: "50px",
            background: this.state.isOn ? "yellow" : "grey"
          }}
          onClick={this.toggleLight}
        />
        <h2>Mouse Position</h2>
        <p>X position: {this.state.x}</p>
        <p>Y position: {this.state.y}</p>
      </>
    );
  }
}

export default App;
