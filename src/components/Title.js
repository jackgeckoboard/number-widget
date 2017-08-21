import React, { Component } from "react";
import "../App.css";
import { TypeSize } from "./TypeScale.js";

class Title extends Component {
  render() {
    let widgetTitleStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      padding: "5px 15px 3px",
      height: 41
    };

    let titleStyle = {
      //fontSize: 21,
      fontSize: TypeSize(4),
      opacity: 0.86,
      lineHeight: 1.25
    };

    return (
      <div style={widgetTitleStyle}>
        <span style={titleStyle}>
          {this.props.titleText}
        </span>
      </div>
    );
  }
}

export default Title;
