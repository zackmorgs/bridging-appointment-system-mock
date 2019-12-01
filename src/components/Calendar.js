import React, { Component } from 'react';
import moment from 'moment'

import DayView from './DayView'
import CalendarDay from './../components/CalendarDay';

import './styles/Calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    console.log('props Day: ', this.props.Day)
    this.state = {
      dateObject: moment(`${this.props.Year}-${this.props.Month}-${this.props.Day}`),
      day: this.props.Day,
      month: this.props.Month,
      year: this.props.Year,
      daysInMonth: 32 - new Date(this.props.Month, this.props.Year, 32).getDate(),
      firstDay: (new Date(this.props.Year, this.props.Month)).getDay()
    }
  }
  getMonthName = (monthNumber) => {
    let months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
    // if (monthNumber.indexOf('0')) {
    //   console.log(monthNumber);
    // }
    return months[monthNumber - 1]
  }
  // firstDayOfMonth = () => {
  //   let dateObject = this.state.dateObject;
  //   let firstDay = moment(dateObject)
  //     .startOf("month")
  //     .format("d");
  //   return firstDay;
  // }
  // weekdayShortName = this.weekdayshort.map(day => {
  //   return (
  //     <th key={day} className="week-day">
  //       {day}
  //     </th>
  //   );
  // });
  componentWillReceiveProps() {
    console.log('Calendar=>componentWillReceiveProps()')
    this.setState({
      dateObject: moment(`${this.props.Year}-${this.props.Month}-${this.props.Day}`),
      day: this.props.Day,
      month: this.props.Month,
      year: this.props.Year,
      daysInMonth: 32 - new Date(this.props.Month, this.props.Year, 32).getDate(),
      firstDay: (new Date(this.props.Year, this.props.Month)).getDay()
    });
  }
  render() {
    let weekdayshort = moment.weekdaysShort();


    let firstDayOfMonth = () => {
      let dateObject = this.state.dateObject;
      let firstDay = moment(dateObject)
        .startOf("month")
        .format("d");
      return firstDay;
    };
    // console.log('firstDayOfMonth:', firstDayOfMonth())
    let blankDates = [];
    console.log('firstDayOfMonth',firstDayOfMonth());
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blankDates.push(
        <div className="calendar-day empty">{""}</div>
      );
    }
    // console.log('blankDates:', blankDates);
    let daysInMonth = [];
    let selectedDay = this.state.Day;
    // let eventTitles = [
      
    //   'Bloomington for PICK UP',
    //   'NEW Beds ONLY for PICK UP - Bloomington',
    //   'NEW Beds ONLY for PICK UP - Roseville',
    //   'NEW Beds ONLY with DELIVERY - ROSEVILLE',
    //   'NEW Beds ONLY with DELIVERY -BLOOMINGTON',
    //   'Roseville for PICK UP',
    //   'Roseville with DELIVERY'
    // ];
    for (let d = 1; d <= this.state.dateObject.daysInMonth(); d++) {
      let classNames = 'calendar-day';
      if (d == this.props.Day) {
        classNames += ' selected'
      }
function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) - 1;
    }
      // console.log('EVENT TITLE:', eventTitles[Math.random(eventTitles.length - 1)])
      daysInMonth.push(
        <CalendarDay key={d} className={classNames} dayNumber={d} eventNumber={getRandomInt(6)} />
      );
    }

    // console.log('daysInMonth:', daysInMonth)

    var totalSlots = [...blankDates, ...daysInMonth];  // contains blanks and daysInMonth using the spread operator. These variables have dynamic values.

    // console.log(totalSlots)



    return (
      <div className='calendar'>
        <div className='calendar-header'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <h4><span id='text-month'>{this.getMonthName(this.props.Month)}</span> <span id='year-name'>{this.props.Year}</span> </h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
        <div className='calendar-weekday-container'>
          {
            weekdayshort.map((day, index) => {
              return (
                <>
                  <span key={day} className="calendar-weekday">
                    {day}
                  </span>
                  {/* {console.log('EVENT ARR:', eventArr[index])} */}
                </>
              );
            })

          }
        </div>
        <div className='calendar-date-container'>
          {
            totalSlots
          }
        </div>
      </div>
    );
  }
}

export default Calendar;