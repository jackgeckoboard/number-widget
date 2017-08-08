import React, { Component } from 'react';
import '../App.css';

class Goal extends Component {

   

  render() {

    let secondaryVizualisationContainerStyle = {
        height: "100%"
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





  




    return (

    <div style={secondaryVizualisationContainerStyle}>    


              
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
        
                
    </div>   
    ); 
  }

}

export default Goal;