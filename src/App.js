import React, { Component } from "react";
import "./App.css";
import Config from "./components/Config.js";
import Widget from "./components/Widget.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgetHeight: 230,
      widgetWidth: 230,
      titleOn: true,
      titleText: "This is the title",
      secondaryVizualisation: "none",
      primaryNumberText: "42",
      prefix: "",
      suffix: "",
      labelOn: true,
      labelText: "Bear attacks",
      comparisonLabelOn: true,
      comparisonLabelText: "Since yesterday",
      transformSize: 0
    };
  }

  onChangeSize(width, height) {
    this.setState({
      widgetWidth: width,
      widgetHeight: height
    });
  }

  onTitleChange(titleOn, titleText) {
    this.setState({
      titleOn: titleOn,
      titleText: titleText
    });
  }

  onPrimaryNumberTextChange(prefix, primaryNumberText, suffix) {
    this.setState({
      prefix: prefix,
      primaryNumberText: primaryNumberText,
      suffix: suffix
    });
  }

  onLabelChange(labelOn, labelText) {
    this.setState({
      labelOn: labelOn,
      labelText: labelText
    });
  }

  onComparisonLabelChange(comparisonLabelOn, comparisonLabelText) {
    this.setState({
      comparisonLabelOn: comparisonLabelOn,
      comparisonLabelText: comparisonLabelText
    });
  }

  onSecondaryVizChange(secondaryVizualisation) {
    this.setState({
      secondaryVizualisation: secondaryVizualisation
    });
  }

  onTransformSizeChange(transformSize) {
    this.setState({
      transformSize: transformSize
    });
  }

  render() {
    return (
      <div className="cf">
        <Config
          widgetWidth={this.state.widgetWidth}
          widgetHeight={this.state.widgetHeight}
          onChangeSize={this.onChangeSize.bind(this)}
          titleOn={this.state.titleOn}
          titleText={this.state.titleText}
          onTitleChange={this.onTitleChange.bind(this)}
          primaryNumberText={this.state.primaryNumberText}
          prefix={this.state.prefix}
          suffix={this.state.suffix}
          labelOn={this.state.labelOn}
          labelText={this.state.labelText}
          comparisonLabelOn={this.state.comparisonLabelOn}
          comparisonLabelText={this.state.comparisonLabelText}
          onLabelChange={this.onLabelChange.bind(this)}
          onComparisonLabelChange={this.onComparisonLabelChange.bind(this)}
          onPrimaryNumberTextChange={this.onPrimaryNumberTextChange.bind(this)}
          secondaryVizualisation={this.state.secondaryVizualisation}
          onSecondaryVizChange={this.onSecondaryVizChange.bind(this)}
          onTransformSizeChange={this.onTransformSizeChange.bind(this)}
          className="w-30 fl"
        />
        <Widget
          titleOn={this.state.titleOn}
          titleText={this.state.titleText}
          widgetWidth={this.state.widgetWidth}
          widgetHeight={this.state.widgetHeight}
          secondaryVizualisation={this.state.secondaryVizualisation}
          primaryNumberText={this.state.primaryNumberText}
          labelOn={this.state.labelOn}
          labelText={this.state.labelText}
          comparisonLabelOn={this.state.comparisonLabelOn}
          comparisonLabelText={this.state.comparisonLabelText}
          aspectRatio={this.state.widgetWidth / this.state.widgetHeight}
          prefix={this.state.prefix}
          suffix={this.state.suffix}
          transformSize={this.state.transformSize}
          className="w-70 fl"
        />
      </div>
    );
  }
}

export default App;
