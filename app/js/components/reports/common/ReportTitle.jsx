import React, { Component, PropTypes } from 'react';
import './ReportTitle.css';

/**
 * Display header which shows the report name
 */
class ReportTitle extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div className="titleContainer">
        <div className="titleText">{this.props.heading}</div>
      </div>
    );
  }
}

ReportTitle.propTypes = {
  heading: PropTypes.string.isRequired
};

export default ReportTitle;