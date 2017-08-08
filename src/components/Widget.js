import React, { Component } from 'react';
import '../App.css';
import sparklineImage from '../images/sparkline.svg';
import Title from './Title.js';
import PrimaryNumber from './PrimaryNumber.js';
import ComparisonNumber from './ComparisonNumber.js';
import Sparkline from './Sparkline.js';
import Goal from './Goal.js'

class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainNumberWidth: ""
        };
    }

    calculateLayout() {
        //Widget is small
        if (this.props.widgetHeight < 230 && this.props.aspectRatio < 2){
            return "full"
        }

        //No secondary viz
        else if (this.props.secondaryVizualisation === "none"){
            return "full"
        }

        //Not wide
        else if (this.props.secondaryVizualisation !== "none" && this.props.aspectRatio < 2){
            return "stacked"
        }

        //Has goal
        else if (this.props.secondaryVizualisation === "goal"){
            return "stacked"
        }

        else{
            return "leftRight"
        }
    }

    calculatePrimaryFontSize() {
        let baseFontSize = 60;
        let multiplier = 1;
        
        if (this.props.widgetHeight >= 710){
            baseFontSize = 200;
        }
        else if (this.props.widgetHeight >= 470){
            baseFontSize = 108;
        }
        
        // make bigger if there is no secondary viz or we're in landscape mode

        if (this.props.secondaryVizualisation === "none") {
            multiplier += 0.2
        }

        //Make bigger if we're in landscape mode

        if (this.props.aspectRatio >= 2 && this.props.secondaryVizualisation !== "goal"){
            multiplier +=0.2
        }

        return (baseFontSize * multiplier);       
    }

    calculateLabelLayout() {
        let wide = this.props.aspectRatio >= 2;
        let floatedSecondaryViz = (this.props.secondaryVizualisation === "comparisonNumber" || this.props.secondaryVizualisation === "sparkline")
        
        if (wide && floatedSecondaryViz === false) {
            return "floated";
            console.log("label is floated")
        }
        else {
            return "stacked";
            console.log("label is floated");
        }
    }

    //Do I need to calculate whether to show the label
    isLabelShown(){
        if (!this.props.labelOn){
            return false
        }
        else if (this.props.widgetHeight < 470 && this.calculateLayout() === "stacked" && this.props.titleOn){
            return false
        }

        else {
            return true
        }
    }

    //What about the secondary number label?
    comparisonLabelShown(){
        if (!this.props.comparisonLabelOn){
            return false
        }
        else if (this.props.widgetHeight < 470 && this.calculateLayout() === "stacked"){
            return false
        }

        else {
            return true
        }
    }

    //See if we need to make main number smaller


  render() {

    //These styles will apply all the time

    let widgetStyle ={
      backgroundColor: "#2a2a2a",
      height: this.props.widgetHeight,
      width: this.props.widgetWidth,
      position: "relative",
    }

    let widgetInnerStyle = {
      position: "absolute",
      top:0,
      left: 0,
      right: 0,
      bottom: 0,
    }



    let secondaryVizualisationContainerStyle ={
        flex: 1,
        paddingBottom: 14
        }  

    let sparklineContainerStyle ={
        flex: 1,
        paddingBottom: 14
    }  
    

    //Full layout
    let primaryNumberContainerStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center"
    }


    let  widgetBodyStyle ={
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "0 14px",
        }

  

    //If you have a secondary stat

    if (this.calculateLayout() === "stacked"){
        widgetBodyStyle ={
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        top: 56,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "0 14px",
        }

        primaryNumberContainerStyle = {
        flex: 1.5,
      }
    }


    //If you have a secondary stat with no title but a label on a small widget
     if (this.props.secondaryVizualisation !== "none" && !this.props.titleOn && this.props.labelOn && this.props.widgetHeight <= 230) {
        widgetBodyStyle ={
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        top: 24,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "0 14px",
        }

        
            
    }

    //If your widget is wide (and doesn't have a goal)

    if (this.calculateLayout() === "leftRight" && this.props.secondaryVizualisation === "comparisonNumber"){
        widgetInnerStyle = {
        position: "absolute",
        top:0,
        left: 0,
        right: 0,
        bottom: 0,
        display:"flex",
        alignItems: "center"
        }

        widgetBodyStyle={
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "flex-start",
        padding: "0 14px",
        width: "100%"
      }
      primaryNumberContainerStyle = {
        width: this.props.widgetHeight,
      }

      secondaryVizualisationContainerStyle ={
        fontSize: this.props.primaryFontSize * 0.8,
        color: "#90c564",
        height: "100%",

    
      }
      
    }

        if (this.calculateLayout() === "leftRight" && this.props.secondaryVizualisation === "sparkline"){
        widgetInnerStyle = {
        position: "absolute",
        top:0,
        left: 0,
        right: 0,
        bottom: 0,
        display:"flex",
        alignItems: "center"
        }

        widgetBodyStyle={
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: "0 14px",
        width: "100%"
      }
      primaryNumberContainerStyle = {
        width: this.props.widgetHeight,
      }

      sparklineContainerStyle ={
        marginLeft: 14,
        width: this.props.widgetWidth - this.props.widgetHeight
      }
      
    }


    if (this.props.aspectRatio >= 2 && this.props.secondaryVizualisation === "none"){

      widgetBodyStyle={
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "0 14px",
      }

    }


    return (

    <div className="w-70 fl pa5">
        <div style={ widgetStyle } >
            <div ref="widget" style={widgetInnerStyle}>
                { this.props.titleOn &&
                    <Title
                        titleOn = {this.props.TitleOn}
                        titleText = {this.props.titleText}
                    />
                }
                <div style={widgetBodyStyle}>
                <div style={primaryNumberContainerStyle}>
                <PrimaryNumber
                    primaryNumberText = {this.props.primaryNumberText}
                    prefix = {this.props.prefix}
                    suffix = {this.props.suffix}
                    primaryFontSize = {this.calculatePrimaryFontSize()}
                    transformSize = {this.props.transformSize}
                    labelShown = {this.isLabelShown()}
                    labelLayout = {this.calculateLabelLayout()}
                    labelText = {this.props.labelText}
                />
                </div>

                {this.props.secondaryVizualisation === "comparisonNumber" &&
                    <div style={secondaryVizualisationContainerStyle}>
                        <ComparisonNumber
                            primaryFontSize = {this.calculatePrimaryFontSize()}
                            comparisonLabelShown = {this.comparisonLabelShown()}
                            comparisonLabelText = {this.props.comparisonLabelText}
                            bigLabel = {this.calculateLayout() === "leftRight"}
                        />
                    </div>
                }
                

                {this.props.secondaryVizualisation === "sparkline" &&
                    <div style={sparklineContainerStyle}>
                        <Sparkline
                        />
                    </div>
                }


                {this.props.secondaryVizualisation === "goal" &&
                    <div style={secondaryVizualisationContainerStyle}>
                        <Goal
                            primaryFontSize = {this.calculatePrimaryFontSize()}
                        />
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