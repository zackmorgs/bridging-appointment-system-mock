import React, { Component } from 'react';

import './styles/DayView.css';

class DayView extends Component {
  render() {
    return (
      <div>
        <h3>Day View</h3>
        <p><strong>Date:</strong> {this.props.dayDate}</p>
      </div>
    );
  }
}

export default DayView;