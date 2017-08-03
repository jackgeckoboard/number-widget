import React, { Component } from 'react';
import '../App.css';
import sparklineImage from '../images/sparkline.svg'

class Widget extends Component {


  render() {

    let widgetStyle ={
      backgroundColor: "#2a2a2a",
      height: this.props.widgetHeight,
      width: this.props.widgetWidth,
      position: "relative"
    }

    let primaryNumberStyle ={
      display: "inline-block",
      fontSize: this.props.primaryFontSize,
      opacity: 0.86,
      height: "50%",
    }

    let titleStyle ={
      fontSize: 21,
      opacity: 0.86,
      lineHeight: 1.25,
    }

    let widgetInnerStyle = {
      position: "absolute",
      top:0,
      left: 0,
      right: 0,
      bottom: 0,

    }

    let widgetTitleStyle ={
      display: "block",
      width: "100%",
      padding: "5px 15px 3px",
      height: 41
    }

    let widgetBodyStyle ={
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      top: 56,
      left: 0,
      right: 0,
      bottom: 0,
      padding: "0 14px",
    }

    let comparisonNumberStyle ={
      fontSize: this.props.primaryFontSize * 0.7,
      color: "#90c564",
      height: "50%",
    }

    let sparklineContainerStyle = {
          paddingBottom: 14,
          height: "50%"
      }

    let goalContainerStyle={
        height: "50%",
    }

    let goalPercentageStyle = {
        fontSize: this.props.primaryFontSize * 0.7,
        color: "#41B6F9",
        position: "absolute",
        left: 0,
        bottom: 0,
        padding: "0 14px 26px",
        verticalAlign: "baseline"
    }

      let goalPercentageSymbolStyle = {
        fontSize: this.props.primaryFontSize * 0.7 * 0.6,   
    }

    let goalNumberStyle = {
        position: "absolute",
        bottom: 26,
        right: 14,
        color: "#2a2a2a",
        backgroundColor: "rgba(255,255,255,0.49",
        borderRadius: 2,
        padding: "3px 6px",
        fontSize: this.props.primaryFontSize * 0.3,
        lineHeight: 1.1,
        marginBottom: "0.25em",
        display: "inline-block"
        
    }

    let goalProgressMeterStyle = {
        height: 8,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(255,255,255,0.13)"
    }

    let goalProgressMeterInnerStyle = {
        height: 8,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: "40%",
        backgroundColor: "#41B6F9"
    }


    if ((this.props.aspectRatio >= 2 && this.props.secondaryVizualisation !== "goal" ) || this.props.secondaryVizualisation === "none"){

      widgetBodyStyle={
        position: "absolute",
        display: "flex",
        alignItems: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "0 14px",
      }
      primaryNumberStyle = {
        width: "50%",
        fontSize: this.props.primaryFontSize * 1.2, //SCALING FACTOR
        opacity: 0.86,
      }

      comparisonNumberStyle ={
        fontSize: this.props.primaryFontSize * 0.8,
        color: "#90c564",
        width: "45%"
      }

      sparklineContainerStyle = {
          height: "60%"
      }
    }

    let prefixsuffixStyle = {
        fontSize: this.props.primaryFontSize * 0.6
     }

    if ((this.props.aspectRatio >= 2 && this.props.secondaryVizualisation === "none" )){
        primaryNumberStyle = {
        width: "100%",
        fontSize: this.props.primaryFontSize * 1.6, //SCALING FACTOR
        opacity: 0.86,
      }
    }


    return (

    <div className="w-70 fl pa5">
        <div style={ widgetStyle } >
            <div ref="widget" style={widgetInnerStyle}>
                { this.props.titleOn &&
                <div style={widgetTitleStyle}>
                    <span style={titleStyle}>{this.props.titleText}</span>
                </div>
                }
                <div style={widgetBodyStyle}>
                <div style={primaryNumberStyle}>
                    { this.props.prefix !== "" &&
                        <span style={prefixsuffixStyle}>{this.props.prefix}</span>
                    }
                    <span ref="primaryNumber">{this.props.primaryNumberText}</span>
                    { this.props.suffix !== "" &&
                        <span style={prefixsuffixStyle}>{this.props.suffix}</span>
                    }
                </div>
                { this.props.secondaryVizualisation === "comparisonNumber" &&
                    <div style={comparisonNumberStyle}>
                    <span ><i className="fa fa-caret-up" aria-hidden="true"></i> 40</span>
                    </div>
                }
                { this.props.secondaryVizualisation === "sparkline" &&
                    <div style={sparklineContainerStyle}>
                        <img className="w-100 h-100 dib" src={sparklineImage} />
                    </div>
                }
                { this.props.secondaryVizualisation === "goal" &&
                    <div style={goalContainerStyle}>
                        <div style={goalPercentageStyle}>
                            <span >60<span style={goalPercentageSymbolStyle}>%</span></span>
                        </div>
                        <div style={goalNumberStyle}>
                            <span >75</span>
                        </div>
                        <div style={goalProgressMeterStyle}>
                            <div style={goalProgressMeterInnerStyle}></div>
                        </div>
                    </div>
                }
                </div>
            </div>
        </div>
    </div>   
    ); 
  }

}

export default Widget;