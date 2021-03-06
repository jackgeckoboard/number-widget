import React, { Component } from "react";
import "../App.css";
import { TypeSize } from "./TypeScale.js";

class PrimaryNumber extends Component {
  render() {
    //These styles will apply all the time

    let prefixsuffixStyle = {
      //fontSize: "0.6em"
      fontSize: TypeSize(this.props.primaryFontRef - 4)
    };

    let labelStyle = {
      //fontSize: this.props.primaryFontSize * 0.333,
      fontSize: TypeSize(this.props.primaryFontRef - 8),
      display: "block"
    };

    let primaryNumberStyle = {
      fontSize: TypeSize(this.props.primaryFontRef + this.props.transformSize),
      color: "rgba(255,255,255,0.86)",
      alignContent: "baseline",
      maxWidth: this.props.widgetHeight - 20,
      display: "inline-block"
    };

    if (this.props.labelLayout === "floated") {
      labelStyle = {
        //fontSize: this.props.primaryFontSize * 0.4,
        fontSize: TypeSize(this.props.primaryFontRef - 7),
        marginLeft: "1em",
        lineHeight: 1.1,
        color: "rgba(255,255,255,0.86)",
        maxWidth: this.props.widgetHeight - 20,
        display: "inline-block"
      };
    }

    return (
      <span>
        <span style={primaryNumberStyle} ref="mainNumber">
          {this.props.prefix !== "" &&
            <span style={prefixsuffixStyle}>
              {this.props.prefix}
            </span>}
          <span ref="primaryNumber">
            {this.props.primaryNumberText}
          </span>
          {this.props.suffix !== "" &&
            <span style={prefixsuffixStyle}>
              {this.props.suffix}
            </span>}
        </span>
        {this.props.labelShown &&
          <span style={labelStyle}>
            {this.props.labelText}
          </span>}
      </span>
    );
  }
}

export default PrimaryNumber;
