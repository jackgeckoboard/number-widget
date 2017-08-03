import React, { Component } from 'react';
import './App.css';
import Config from './components/Config.js';
import Widget from './components/Widget.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgetHeight: 230,
      widgetWidth: 230,
      primaryFontSize: 60,
      titleOn: true,
      titleText: "This is the title",
      secondaryVizualisation: "none",
      primaryNumberText: "42",
      prefix: "",
      suffix: ""
    };
  }


  calculateFontSize(height) {
     // Update primary font size
      if (height >= 710){
        this.setState({primaryFontSize: 200});
      }
     else if (height >= 470){
       this.setState({primaryFontSize: 108});
     }
     else {
      this.setState({primaryFontSize: 60});
     }
  }

  onChangeSize(width, height) {
    this.setState({ 
        widgetWidth: width,
        widgetHeight: height,
     });
    this.calculateFontSize(height);
  }

  onTitleChange(titleOn, titleText){
    this.setState({ 
        titleOn: titleOn,
        titleText: titleText,
     });
  }

  onPrimaryNumberTextChange(prefix, primaryNumberText, suffix){
    this.setState({ 
        prefix: prefix,
        primaryNumberText: primaryNumberText,
        suffix: suffix,
     });
  }

  onSecondaryVizChange(secondaryVizualisation){
     this.setState({ 
        secondaryVizualisation: secondaryVizualisation
     });
  }

  render() {

    return (
      <div className="App" className="cf">
        <Config
          widgetWidth = {this.state.widgetWidth}
          widgetHeight = {this.state.widgetHeight}
          onChangeSize = {this.onChangeSize.bind(this)}
          titleOn = {this.state.titleOn}
          titleText = {this.state.titleText}
          onTitleChange = {this.onTitleChange.bind(this)}
          primaryNumberText = {this.state.primaryNumberText}
          prefix = {this.state.prefix}
          suffix = {this.state.suffix}
          onPrimaryNumberTextChange = {this.onPrimaryNumberTextChange.bind(this)}
          secondaryVizualisation = {this.state.secondaryVizualisation}
          onSecondaryVizChange = {this.onSecondaryVizChange.bind(this)}
          className="w-30 fl"
          
          />
        <Widget 
          titleOn = {this.state.titleOn}
          titleText = {this.state.titleText}
          widgetWidth = {this.state.widgetWidth}
          widgetHeight = {this.state.widgetHeight}
          secondaryVizualisation = {this.state.secondaryVizualisation}
          primaryNumberText = {this.state.primaryNumberText}
          primaryFontSize = {this.state.primaryFontSize}
          aspectRatio = {this.state.widgetWidth / this.state.widgetHeight}
          prefix = {this.state.prefix}
          suffix = {this.state.suffix}

          className="w-70 fl"
        />  
      </div>
    ); 
  }

}

export default App;