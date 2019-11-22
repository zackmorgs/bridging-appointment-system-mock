import React, { Component } from 'react';

import './styles/CalendarDay.css';

class CalendarDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      selected: false
    }
  }
  handleDayClick = () => {
    this.setState({
      selected: !this.state.selected
    })
  }
  render() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) - 1;
    }
    let eventNumber = getRandomInt(6);

    let classNames = 'calendar-day';

    if (this.state.selected) {
      classNames += ' selected';
    }

    return (
      <div className={classNames} onClick={this.handleDayClick}>
        <div className='day-top'>
          <span className='text-date'>{this.props.dayNumber}</span>
          <a className='' onclick={this.handleClick} alt='Add Event'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </a>
        </div>
        {
          this.props.eventNumber > 0 ? (
            <div className='day-events'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>{' '}
              <span>{this.props.eventNumber} Events</span>
            </div>
          ) : (
              null
            )
        }
      </div>
    );
  }
}
// {[
//   null,
//   <div className='event event-red'>{eventTitles[Math.random(eventTitles.length - 1)]}</div>,
//   <div className='event event-blue'>{eventTitles[Math.random(eventTitles.length - 1)]}</div>,
//   <div className='event event-green'>{eventTitles[Math.random(eventTitles.length - 1)]}</div>,
//   <div className='event event-yellow'>{eventTitles[Math.random(eventTitles.length - 1)]}</div>
// ][Math.random(4)]}
export default CalendarDay;