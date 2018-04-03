import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './ReportNavMenu.css';

/**
 * This component will be shown in the left side which allows users to navigate through
 * different available reports
 */
class ReportNavComponent extends Component {


  render() {
    return (
      <div className="navWrapper">

        <ul>
          <li className="active">
            <div className="menuItemHeader"><span className="icon-dashboard" />Built-In Reports</div>
            <ul>
              <li>
                <span className="menuItem">
                  <div className="menuItemContainer">
                    <span className="glyphicon glyphicon-user float-left" />
                    <div>
                      <NavLink activeClassName="active" to="/ListOfUsers">
                        List of Users
                                    </NavLink>
                    </div>
                  </div>
                </span>
              </li>
              <li>
                <span className="menuItem">
                  <div className="menuItemContainer">
                    <span className="glyphicon glyphicon-user float-left" />
                    <NavLink to="/ListOfProviders">
                      List of Providers
                                    </NavLink>
                  </div>
                </span>
              </li>
              <li>
                <span className="menuItem">
                  <div className="menuItemContainer">
                    <span className="glyphicon glyphicon-exclamation-sign float-left" />
                    <NavLink to="/ListOfDiagnosis">
                      List of Diagnosis
                                    </NavLink>
                  </div>
                </span>
              </li>
              <li>
                <span className="menuItem">
                  <div className="menuItemContainer">
                    <span className="glyphicon glyphicon-plus-sign float-left" />
                    <div>
                      <NavLink to="/ListOfNewPatients">
                        List of New Patient Registrations
                                    </NavLink>
                    </div>
                  </div>
                </span>
              </li>
              <li>
                <span className="menuItem">
                  <div className="menuItemContainer">
                    <span className="glyphicon glyphicon-copy float-left" />
                    <NavLink to="/NumberOfAdmissions">
                      Number of Admissions
                                    </NavLink>
                  </div>
                </span>
              </li>
              <li>
                <span className="menuItem">
                  <div className="menuItemContainer">
                    <span className="glyphicon glyphicon-paste float-left" />
                    <NavLink to="/NumberOfDischarges">
                      Number of Discharges
                                    </NavLink>
                  </div>
                </span>
              </li>
              <li>
                <span className="menuItem">
                  <div className="menuItemContainer">
                    <span className="glyphicon glyphicon-transfer float-left" />
                    <NavLink to="/NumberOfTransfers">
                      Number of Transfers
                                    </NavLink>
                  </div>
                </span>
              </li>
              <li>
                <span className="menuItem">
                  <div className="menuItemContainer">
                    <span className="glyphicon glyphicon-user float-left" />
                    <NavLink to="/NumberOfPatients">
                      Number of Patient Registrations
                                    </NavLink>
                  </div>
                </span>
              </li>
              <li>
                <span className="menuItem">
                  <div className="menuItemContainer">
                    <span className="glyphicon glyphicon-file float-left" />
                    <NavLink to="/NumberOfVisitNotes">
                      Number of Visit Notes
                                    </NavLink>
                  </div>
                </span>
              </li>
              <li>
                <span className="menuItem">
                  <div className="menuItemContainer">
                    <span className="glyphicon glyphicon-user float-left" />
                    <NavLink to="/NumberOfVisits">
                      Number of Visits
                                    </NavLink>
                  </div>
                </span>
              </li>

            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default ReportNavComponent;