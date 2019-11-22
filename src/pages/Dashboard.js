import React from 'react';

import { useParams, Link } from 'react-router-dom';
import './styles/Dashboard.css';

let actionListSample = [
  {
    title: 'Bloomington for PICK UP',
    description: 'Shopping appointment at Bloomington Location (201 W 87th Street) Agency/Client will arrange pick-up of items within 48 hours after the appointment. Pick-up hrs: Mon thru Thur from 9:00 a.m. to 6:00 p.m.; Fri and Sat from 9:00 a.m. to 3:00 p.m.'
  },
  {
    title: 'Bloomington with DELIVERY',
    description: 'Shopping appointment at Bloomington location (201 W 87th Street) with DELIVERY to Hennepin County, (Except Brooklyn Center/Park, Maple Grove and Rogers) Dakota, Scott, and Carver Counties.'
  }, {
    title: 'NEW Beds ONLY for PICK UP - Bloomington',
    description: 'THIS IS NOT A SHOPPING APPOINTMENT. Buy NEW Beds/ Bed Frames ONLY - for PICK UP at our Bloomington Location - 201 W 87th Street, 55420. Hours are Mon. thru Thur. from 9:00 a.m. to 6:00 p.m.; Fri and Sat from 9:00 a.m. to 3:00 p.m.'
  }, {
    title: 'NEW Beds ONLY for PICK UP - Roseville',
    description: 'THIS IS NOT A SHOPPING APPOINTMENT. Buy NEW Beds/ Bed Frames ONLY - for PICK UP at our Roseville Location - 1730 Terrace Dr, 55113. Hours are Mon. thru Thur. from 9:00 a.m. to 6:00 p.m.; Fri and Sat from 9:00 a.m. to 3:00 p.m.'
  }, {
    title: 'NEW Beds ONLY with DELIVERY - ROSEVILLE',
    description: 'THIS IS NOT A SHOPPING APPOINTMENT. Buy NEW Beds and/or Bed Frames only - with DELIVERY by Bridging to Ramsey, Anoka and Washington Counties. Delivery fee is $60. Bed(s) will be delivered on the next business day.'
  }, {
    title: 'NEW Beds ONLY with DELIVERY -BLOOMINGTON',
    description: 'THIS IS NOT A SHOPPING APPOINTMENT. Buy NEW Beds and/or Bed Frames only - with DELIVERY by Bridging to Hennepin, Dakota, Scott and Carver Counties. Delivery fee is $60. Bed(s) will be delivered on the next business day.'
  }, {
    title: 'Roseville for PICK UP',
    description: 'Shopping appointment at Roseville Location (1730 Terrace Drive, 55113) Agency/Client will arrange pick-up of items within 48 hours after the appointment. Pick-up hrs: Mon thru Thur from 9:00 a.m. to 6:00 p.m.; Fri and Sat from 9:00 a.m. to 3:00 p.m.'
  }, {
    title: 'Roseville with DELIVERY',
    description: 'Shopping appointment for ROSEVILLE location (1730 Terrace Dr, 55113) with DELIVERY to Ramsey, Anoka, and Washington Counties. They will deliver Brooklyn Center/Park, Maple Grove and Rogers ONLY in Hennepin County'
  }
];

let Dashboard = () => (
  <div id='dashboard-container'>
    {/* <header>
      <h2>Dashboard</h2>
    </header> */}
    {/* <div className='text-well-info'>
      <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="#0072d3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      <small>If you are not a registered caseworker and need a user name and password, please contact the primary Bridging contact at your agency or contact Bridging at client.services@bridging.org to find out more information on making referrals for a client.</small>
    </div> */}
    <main className='dashboard-content'>
      <div id='dashboard-actions'>
        <div id='dashboard-action-header'>
          <h3>Dashboard</h3>
        </div>
        <ul id='dashboard-action-list'>
          {
            actionListSample.map((actionListItem,index) =>
              (
                <li className='action-list-item'>
                  <h5>{actionListItem.title}</h5>
                  <p className='action-desc'>
                    {actionListItem.description}
                  </p>
                  <Link 
                    className='btn btn-appointment'
                    to={{
                      pathname:'/appointments/make-appointment/',
                      state: {
                        Title:actionListItem.title,
                        Desc:actionListItem.description
                      }
                    }}
                    
                    >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg> */}
                    Create Appointment
                </Link>
                </li>
              )
            )
          }
        </ul>
      </div>
    </main>
  </div>
);

export default Dashboard;