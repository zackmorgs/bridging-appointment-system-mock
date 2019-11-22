import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './styles/Appointments.css';

let Appointments = () => (
  <div>
    <header className='page-header'>
      <h3>My Appointments</h3>
    </header>
    <div id='sort-select'>
      <label for='opt-sort'>Sort By </label>
      <select id='opt-sort'>
        <option>Date</option>
        <option>Location</option>
      </select>
    </div>
    <div className='appointments-list-container'>
      <ul className='appointments-list'>
        {
          [
            {
              Title: 'NEW Beds ONLY with DELIVERY -BLOOMINGTON',
              Date: 'January 24, 2020',
              Location: 'Bloomington, MN'
            },
            {
              Title: 'Rochester for Pick Up',
              Date: 'January 25, 2020',
              Location: 'Rochester, MN'
            },
            {
              Title: 'NEW Beds ONLY for PICK UP - Roseville',
              Date: 'January 28, 2020',
              Location: 'Roseville, MN'
            }

          ].map(appointment =>
            <li className='appointment'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.125rem" viewBox="0 0 24 24" fill="none" stroke="#3a90ba" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <div className='appointment-info'>
                <h4 className='text-appointment-title'>
                  {appointment.Title}
                </h4>
                <i>{appointment.Date}</i>
                <div className='appointment-controls'>
                  <Link id='btn-appointment' className='btn' to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    <span>View</span>
                  </Link>
                </div>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  </div>
)
export default Appointments;