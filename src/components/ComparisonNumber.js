import React, { Component } from "react";
import "../App.css";

class ComparisonNumber extends Component {
  render() {
    let secondaryVizualisationContainerStyle = {
      height: "100%"
    };

    let comparisonLabelStyle = {
      fontSize: this.props.primaryFontSize * 0.23,
      color: "rgba(255,255,255,0.86)",
      lineHeight: 1.2,
      display: "block"
    };

    let comparisonNumberStyle = {
      fontSize: this.props.primaryFontSize * 0.7,
      color: "#90c564"
    };

    //If floated on the right, make the secondary label the same size as the main label
    if (this.props.bigLabel) {
      comparisonLabelStyle = {
        fontSize: this.props.primaryFontSize * 0.333,
        color: "rgba(255,255,255,0.86)",
        lineHeight: 1.5,
        display: "block"
      };
    }

    return (
      <div style={secondaryVizualisationContainerStyle}>
        {!this.props.comparisonLabelShown &&
          <div style={comparisonNumberStyle}>
            <span>
              <i className="fa fa-caret-up" aria-hidden="true" /> 40
            </span>
          </div>}

        {this.props.comparisonLabelShown &&
          <div style={comparisonNumberStyle}>
            <span>
              <i className="fa fa-caret-up" aria-hidden="true" /> 40
            </span>
            <br />
            <span style={comparisonLabelStyle}>Since yesterday</span>
          </div>}
      </div>
    );
  }
}

export default ComparisonNumber;
