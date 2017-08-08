import React, { Component } from 'react';
import '../App.css';

class PrimaryNumber extends Component {


  render() {

    //These styles will apply all the time

    let  prefixsuffixStyle = {
        fontSize: "0.6em"
        }

    let labelStyle = {
            fontSize: this.props.primaryFontSize * 0.333,
            display: "block"        
     }


      let   primaryNumberStyle = {
        fontSize: this.props.primaryFontSize,
        opacity: 0.86,
        alignContent: "baseline"
        }
    
    if (this.props.labelLayout === "floated"){
        labelStyle = {
        fontSize: this.props.primaryFontSize * 0.4,
        marginLeft: "1em",
        lineHeight: 1.1           
     }
    }




    return (

                <span style={primaryNumberStyle} ref="mainNumber">
                    { this.props.prefix !== "" &&
                        <span style={prefixsuffixStyle}>{this.props.prefix}</span>
                    }
                    <span ref="primaryNumber">{this.props.primaryNumberText}</span>
                    { this.props.suffix !== "" &&
                        <span style={prefixsuffixStyle}>{this.props.suffix}</span>
                    }
                    { this.props.labelShown &&
                        <span style={labelStyle}>{this.props.labelText}</span>
                    }
                </span>
    ); 
  }

}

export default PrimaryNumber;