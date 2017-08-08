import React, { Component } from 'react';
import '../App.css';
import sparklineImage from '../images/sparkline.png';

class Sparkline extends Component {

   

  render() {

    let secondaryVizualisationContainerStyle = {
        height: "100%"
    }


    let sparklineContainerStyle = {
            paddingBottom: 14,
            backgroundImage: `url(${sparklineImage})`,
            backgroundSize: "100% 100%",
            height: "100%"
        }



    

  




    return (

    <div style={secondaryVizualisationContainerStyle}>    
                


                    <div style={sparklineContainerStyle}></div>
            
                
    </div>   
    ); 
  }

}

export default Sparkline;