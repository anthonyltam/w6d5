import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  extractTime() {
    const time = this.state.time.toTimeString().split(' ');
    let newTime = [time[0]];
    let string = '';
    string += time[2].slice(1, 2);
    string += time[3].slice(0, 1);
    string += time[4].slice(0, 1);
    newTime.push(string);
    return newTime.join(' ');
  }

  render() {
    return (
      <div className='clock'>
        <h1>Clock</h1>
        <ul>
          <li>
            <span>Time:</span>
            <span>{this.extractTime()}</span>
          </li>
          <li>
            <span>Date:</span>
            <span>{this.state.time.toDateString()}</span>
           </li>
        </ul>
      </div>
    );
  }
}

export default Clock;
