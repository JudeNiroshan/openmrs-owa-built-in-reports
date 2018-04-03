import React, { Component } from 'react';
import ReportAsTableView from '../common/ReportAsTableView';
import ReportTitle from '../common/ReportTitle';
import DateRangeInput from '../common/DateRangeInput';
import moment from 'moment';

/**
 * Display the result of Number of Visits report
 */
class NumberOfVisits extends Component {

  constructor() {
    super();
    let dateStart = moment().subtract(1, 'months').format('YYYY-MM-DD');
    let dateEnd = moment().format('YYYY-MM-DD');
    this.state = {
      parameters: {
        startDate: dateStart,
        endDate: dateEnd
      }
    };
    this.getReportUUID = this.getReportUUID.bind(this);
    this.eventListenerForStartDate = this.eventListenerForStartDate.bind(this);
    this.eventListenerForEndDate = this.eventListenerForEndDate.bind(this);
  }

  getReportUUID() {
    return "9667a78e-4881-11e7-a919-92ebcb67fe33";
  }

  eventListenerForStartDate(selectedDate) {

    if (moment(selectedDate).isValid()) {
      this.setState(prevState => ({
        parameters: {
          startDate: moment(selectedDate).format('YYYY-MM-DD'),
          endDate: prevState.parameters.endDate
        }
      }));
    }
  }

  eventListenerForEndDate(selectedDate) {

    if (moment(selectedDate).isValid() && selectedDate.isAfter(this.state.parameters.startDate)) {
      this.setState(prevState => ({
        parameters: {
          startDate: prevState.parameters.startDate,
          endDate: moment(selectedDate).format('YYYY-MM-DD')
        }
      }));
    }
  }

  render() {
    return (
      <div>
        <ReportTitle heading="Number of Visits" />

        <DateRangeInput label="Visits created"
          stdlistener={this.eventListenerForStartDate}
          etdlistener={this.eventListenerForEndDate}
          initStD={this.state.parameters.startDate}
          initEtD={this.state.parameters.endDate} />

        <ReportAsTableView reportUUID={this.getReportUUID()}
          reportParameters={this.state.parameters} />
      </div>
    );
  }

}

export default NumberOfVisits;