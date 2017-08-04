import React, { Component } from 'react';
import '../App.css';
import sparklineImage from '../images/sparkline.svg';

class Widget extends Component {


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

    let widgetTitleStyle ={
      display: "block",
      width: "100%",
      padding: "5px 15px 3px",
      height: 41
    }

    let titleStyle ={
      fontSize: 21,
      opacity: 0.86,
      lineHeight: 1.25,
    }

    let  prefixsuffixStyle = {
        fontSize: "0.6em"
        }

    let labelStyle = {
            fontSize: "0.33em",
            display: "block",
             
     }

    let comparisonLabelStyle = {
            fontSize: this.props.primaryFontSize * 0.23,
            display: "block",
            color: "rgba(255,255,255,0.86)"   
     }

    let comparisonNumberStyle ={
        fontSize: this.props.primaryFontSize * 0.7,
        color: "#90c564",
        flex: 1,
        paddingBottom: 14
        }  
    
    let goalContainerStyle={
            flex: 1,
            paddingBottom: 14
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
            fontSize: "0.6em",   
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

    let sparklineContainerStyle = {
            paddingBottom: 14,
            height: "44%"
        }
    
    let  floatedLabelStyle = {
        fontSize: this.props.primaryFontSize * 0.504, //Scaling factor equivalent of 0.4em
        opacity: 0.86,
        marginLeft: 14,
        lineHeight: 1.1
      }



    //Default styles - no secondary stat

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

     let   primaryNumberStyle = {
        fontSize: this.props.primaryFontSize * 1.2, //SCALING FACTOR
        opacity: 0.86,
        alignContent: "center"
        }

    //If you have a secondary stat

    if (this.props.secondaryVizualisation !== "none") {
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

        primaryNumberStyle = {
        flex: 1.5,
        fontSize: this.props.primaryFontSize,
        opacity: 0.86,
        alignContent: "center"
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

        primaryNumberStyle = {
        flex: 1.5,
        fontSize: this.props.primaryFontSize,
        opacity: 0.86,
        alignContent: "center"
      }

          
      labelStyle = {
            fontSize: "0.4em",
            display: "block",
             
     }
            
    }

    //If your widget is wide (and doesn't have a goal)

    if (this.props.aspectRatio >= 2 && this.props.secondaryVizualisation !== "goal"){

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
      primaryNumberStyle = {
        fontSize: this.props.primaryFontSize * 1.2, 
        opacity: 0.86,
        width: "50%"
      }

      comparisonNumberStyle ={
        fontSize: this.props.primaryFontSize * 0.8,
        color: "#90c564",
        width: "50%",
        marginLeft: 14
      }
      
      comparisonLabelStyle = {
            fontSize: this.props.primaryFontSize * 0.4,
            display: "block",
            color: "rgba(255,255,255,0.86)"   
     }

      sparklineContainerStyle = {
          height: "60%",
          width: "50%",
          marginLeft: 14
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
      primaryNumberStyle = {
        fontSize: this.props.primaryFontSize * 1.2, 
        opacity: 0.86,
        display: "inline-block",
        marginRight: 14
      }
    }





    if ((this.props.aspectRatio >= 2 && this.props.secondaryVizualisation === "none" && !this.props.labelOn )){
        primaryNumberStyle = {
        width: "100%",
        fontSize: this.props.primaryFontSize * 1.6, //SCALING FACTOR
        opacity: 0.86,
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center"
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
                <span style={primaryNumberStyle}>
                    { this.props.prefix !== "" &&
                        <span style={prefixsuffixStyle}>{this.props.prefix}</span>
                    }
                    <span ref="primaryNumber">{this.props.primaryNumberText}</span>
                    { this.props.suffix !== "" &&
                        <span style={prefixsuffixStyle}>{this.props.suffix}</span>
                    }
                    
                    { this.props.labelOn && (
                        (this.props.aspectRatio < 2 && this.props.secondaryVizualisation === "none") 
                        || 
                        (this.props.aspectRatio < 2 && this.props.secondaryVizualisation !== "none" && this.props.widgetHeight >= 470) 
                        || 
                        (this.props.aspectRatio >= 2 && this.props.secondaryVizualisation !== "none")
                        ||
                        (this.props.aspectRatio < 2 && this.props.secondaryVizualisation !=="none" && !this.props.titleOn)
                        ) &&
                        
                        <span style={labelStyle}>{this.props.labelText}</span>
                    }
                </span>
                { this.props.labelOn && this.props.aspectRatio >= 2 && this.props.secondaryVizualisation === "none" &&
                        <span style={floatedLabelStyle}>{this.props.labelText}</span>
                    }
                { this.props.secondaryVizualisation === "comparisonNumber" && (!this.props.comparisonLabelOn || (this.props.widgetHeight < 470 && this.props.aspectRatio < 2)) && this.props.widgetHeight >= 230 &&
                    <div style={comparisonNumberStyle}>
                    <span ><i className="fa fa-caret-up" aria-hidden="true"></i> 40</span>
                    </div>
                }

                  { this.props.secondaryVizualisation === "comparisonNumber" && this.props.comparisonLabelOn && (this.props.widgetHeight >= 470 || this.props.aspectRatio >= 2)  &&
                    <div style={comparisonNumberStyle}>
                    <span ><i className="fa fa-caret-up" aria-hidden="true"></i> 40</span>
                    <span style={comparisonLabelStyle} >{this.props.comparisonLabelText}</span>
                    </div>
                }

                { this.props.secondaryVizualisation === "sparkline" && this.props.widgetHeight >= 230 &&
                    <div style={sparklineContainerStyle}>
                        <img className="w-100 h-100 dib" src={sparklineImage} />
                    </div>
                }
                { this.props.secondaryVizualisation === "goal" && this.props.widgetHeight >= 230 &&
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