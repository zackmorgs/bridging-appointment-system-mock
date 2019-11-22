import React, { Component } from 'react';

import Calendar from './../components/Calendar';

import './styles/MakeAppointment.css';
// import { thisTypeAnnotation } from '@babel/types';

class MakeAppointment extends Component {
  constructor(props) {
    super(props);

    const { Title } = this.props.location.state
    const { Desc } = this.props.location.state


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.state = {
      Title: Title,
      Desc: Desc,
      Day: dd,
      Month:mm,
      Year:yyyy,
      DateString:()=> (`${this.state.Year}-${this.state.Month}-${this.state.Day}`),
    }
  }
  render() {
    return (
      <div id='make-appointment'>
        <div className="page-header">
          <h3><span className='text-title'>Make Appointment</span></h3>
        </div>
        <div className='appointment-data'>
          <div className='card appointment-info'>
            <h5>{this.state.Title}</h5>
            <i>{this.state.DateString()}</i>
            <p>
              {this.state.Desc}
            </p>
          </div>
          <div className='card appointment-calendar-view'>
            <Calendar Year={this.state.Year} Day={this.state.Day} Month={this.state.Month} />
          </div>
        </div>
      </div>
    );
  }
}

export default MakeAppointment;