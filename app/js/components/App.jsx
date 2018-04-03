/**
 * The contents of this file are subject to the OpenMRS Public License
 * Version 1.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://license.openmrs.org
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * Copyright (C) OpenMRS, LLC.  All Rights Reserved.
 */
import React from 'react';
import { Header } from './common/Header';
import BreadCrumbComponent from './breadCrumb/breadCrumbComponent';
import MainLayout from './common/MainLayout';
import "./app.css";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'block'
    };
  }

  render() {
    const display = this.state;
    return (
      <div>
        <div id="tabbed-cohort" className="header-component">
          <Header />
          <BreadCrumbComponent />
        </div>
        <div id="body-wrapper">
          <div id="displayReports" className="col-md-12 section">
            <MainLayout />
          </div>
        </div>
      </div>
    );
  }
}
