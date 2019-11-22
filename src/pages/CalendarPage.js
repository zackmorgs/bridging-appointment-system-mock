import React, { Component } from 'react';
import Calendar from './../components/Calendar';

import './styles/CalendarPage.css';

class CalendarPage extends Component {
  constructor(props){
    super(props);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    console.log(dd);

    this.state = {
      Day: dd,
      Month:mm,
      Year:yyyy,
      DateString:()=> (`${this.state.Year}-${this.state.Month}-${this.state.Day}`),
      dateSelected: false
    }
  }

  handleDateChange = (event) => {
    let newDate = new Date(event.target.value);
    console.log('handleDateChange:', event.target.value)
    console.log('converted to Date:', newDate)
    //'10 06 2014'
    // var today = new Date();
    var dd = event.target.value.split('-')[2]
    var mm = event.target.value.split('-')[1]
    var yyyy = event.target.value.split('-')[0]

    this.setState({
      dateSelected:true,
      Day: dd,
      Month:mm,
      Year:yyyy
    })
  }

  render() {
    // get current date for intitial view
    
    console.log('CalendarPage Day: ', this.state.DateString());
    return (
      <div id='calendarPage'>
        {/* <h3>Calendar</h3> */}
        {/* <input type='date' value={this.state.DateString()} onChange={this.handleDateChange} /> */}
        <Calendar Day={this.state.Day} Month={this.state.Month} Year={this.state.Year} />
      </div>
    );
  }
}

export default CalendarPage;