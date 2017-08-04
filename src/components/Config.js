import React, { Component } from 'react';
import '../App.css';

class Config extends Component {

  onHeightChange(event){
    this.props.onChangeSize(this.props.widgetWidth, event.target.value);
  }

  onWidthChange(event){
    this.props.onChangeSize(event.target.value, this.props.widgetHeight );
  }

  //Set to preset sizes

  onSetSize1x1(){
    this.props.onChangeSize(230, 230);
  }

  onSetSize2x1(){
    this.props.onChangeSize(470, 230);
  }

   onSetSize2x2(){
    this.props.onChangeSize(470, 470);
  }

  onSetSize1x2(){
    this.props.onChangeSize(230, 470);
  }

  onSetSize3x2(){
    this.props.onChangeSize(710, 470);
  }

   onSetSize3x3(){
    this.props.onChangeSize(710, 710);
  }

  onSetSize2x3(){
    this.props.onChangeSize(470, 710);
  }

  onSetSize3x1(){
    this.props.onChangeSize(710, 230);
  }

   onSetSize1x3(){
    this.props.onChangeSize(230, 710);
  }


  //Title

  onTitleToggle(){
    if (this.props.titleOn){
        this.props.onTitleChange(false, this.props.titleText)
    }
    else {
        this.props.onTitleChange(true, this.props.titleText)
    }
  }

  onTitleTextChange(event){
    this.props.onTitleChange(this.props.titleOn, event.target.value)
  }

  onPrimaryNumberTextChange(event){
      this.props.onPrimaryNumberTextChange(this.props.prefix, event.target.value, this.props.suffix)
  }

  onPrefixChange(event){
      this.props.onPrimaryNumberTextChange(event.target.value, this.props.primaryNumberText, this.props.suffix)
  }

    onSuffixChange(event){
      this.props.onPrimaryNumberTextChange(this.props.prefix, this.props.primaryNumberText, event.target.value)
  }

  //Label

  onLabelToggle(){
    if (this.props.labelOn){
        this.props.onLabelChange(false, this.props.labelText)
    }
    else {
        this.props.onLabelChange(true, this.props.labelText)
    }
  }

  onLabelTextChange(event){
    this.props.onLabelChange(this.props.labelOn, event.target.value)
  }

  //Comparison Label

  onComparisonLabelToggle(){
    if (this.props.comparisonLabelOn){
        this.props.onComparisonLabelChange(false, this.props.comparisonLabelText)
    }
    else {
        this.props.onComparisonLabelChange(true, this.props.comparisonLabelText)
    }
  }

  onComparisonLabelTextChange(event){
    this.props.onLabelChange(this.props.labelOn, event.target.value)
  }

  onSecondaryVizChange(event){
      this.props.onSecondaryVizChange(event.target.value)
  }

  render() {

    return (
    
      <div className="w-30 fl bg-dark-gray vh-100 pa4 overflow-y-scroll">
          <h2 className="f3 fw5 mt0">Build</h2>
          
          <h3 className="f5 fw5 mt4">Title</h3>
          <input
          className="mb3 mr2"
          type="checkbox" 
          checked={this.props.titleOn} 
          onChange = {this.onTitleToggle.bind(this)}
          id="titleCheckbox" 
          />
          <label htmlFor="titleCheckbox">Show title</label>
          <br />
          <input 
            className="br2 pa2 w-100 bn bg-mid-gray white"
            type="text"
            value={this.props.titleText}
            onChange={this.onTitleTextChange.bind(this)}
        />

        <h3 className="f5 fw5 mt4">Primary Number</h3>
        <input 
            className="br2 pa2 w-20 bn bg-mid-gray white mr1"
            type="text"
            value={this.props.prefix}
            onChange={this.onPrefixChange.bind(this)}
        />
        <input 
            className="br2 pa2 w-50 bn bg-mid-gray white mr1"
            type="text"
            value={this.props.primaryNumberText}
            onChange={this.onPrimaryNumberTextChange.bind(this)}
        />
        <input 
            className="br2 pa2 w-20 bn bg-mid-gray white"
            type="text"
            value={this.props.suffix}
            onChange={this.onSuffixChange.bind(this)}
        />

         <h3 className="f5 fw5 mt4">Label</h3>
          <input
          className="mb3 mr2"
          type="checkbox" 
          checked={this.props.labelOn} 
          onChange = {this.onLabelToggle.bind(this)}
          id="labelCheckbox" 
          />
          <label htmlFor="labelCheckbox">Show label for primary number</label>
          <br />
          <input 
            className="br2 pa2 w-100 bn bg-mid-gray white"
            type="text"
            value={this.props.labelText}
            onChange={this.onLabelTextChange.bind(this)}
        />



        <h3 className="f5 fw5 mt4">Secondary Visualization</h3>
        <select 
            onChange={this.onSecondaryVizChange.bind(this)} 
            value={this.props.secondaryVizualisation}
            className="br2 h2 w-100 bn bg-mid-gray white"
        >
            <option value="none">None</option>
            <option value="comparisonNumber">Comparison Number</option>
            <option value="sparkline">Sparkline</option>
            <option value="goal">Goal</option>
        </select>
        {this.props.secondaryVizualisation === "comparisonNumber" && 
        <div>
          <input
          className="mb3 mr2 mt3"
          type="checkbox" 
          checked={this.props.comparisonLabelOn} 
          onChange = {this.onComparisonLabelToggle.bind(this)}
          id="comparisonLabelCheckbox" 
          />
          <label htmlFor="comparisonLabelCheckbox">Show label for comparison number</label>
          <br />
          <input 
            className="br2 pa2 w-100 bn bg-mid-gray white"
            type="text"
            value={this.props.comparisonLabelText}
            onChange={this.onComparisonLabelTextChange.bind(this)}
        />
        </div>
        }
        <h3 className="f5 fw5 mt4">Size</h3>
          <div className="cf">
              <div className="w-50 fl pr3">
                <label htmlFor="width" className="f6 db mb2">Width</label>
                <input 
                    className="br2 pa2 w-100 bn bg-mid-gray white"
                    id="width" 
                    value={this.props.widgetWidth} 
                    type="text" 
                    onChange={this.onWidthChange.bind(this)} />
            </div>
            <div className="w-50 fl pr3">
                <label htmlFor="width" className="f6 db mb2">Height</label>         
                <input 
                className="br2 pa2 w-100 bn bg-mid-gray white"
                id="height" 
                value={this.props.widgetHeight} 
                type="text" 
                onChange={this.onHeightChange.bind(this)} />
            </div>
          </div>
           <p className="f6 db mb2 mt4 ">Preset sizes</p>
          <button 
            className="mr2 pv2 ph3 br2 mb2 bn bg-moon-gray pointer bg-animate hover-bg-light-gray" 
            onClick={this.onSetSize1x1.bind(this)}>
            1 x 1
          </button>
          <button 
            className="mr2 pv2 ph3 br2 mb2 bn bg-moon-gray pointer bg-animate hover-bg-light-gray"
            onClick={this.onSetSize2x1.bind(this)}>
            2 x 1
          </button>
          <button 
            className="mr2 pv2 ph3 br2 mb2 bn bg-moon-gray pointer bg-animate hover-bg-light-gray"
            onClick={this.onSetSize3x1.bind(this)}>
            3 x 1
          </button>

          <button 
            className="mr2 pv2 ph3 br2 mb2 bn bg-moon-gray pointer bg-animate hover-bg-light-gray" 
            onClick={this.onSetSize1x2.bind(this)}>
            1 x 2
          </button>
          <button 
            className="mr2 pv2 ph3 br2 mb2 bn bg-moon-gray pointer bg-animate hover-bg-light-gray"
            onClick={this.onSetSize2x2.bind(this)}>
            2 x 2
          </button>
          <button 
            className="mr2 pv2 ph3 br2 mb2 bn bg-moon-gray pointer bg-animate hover-bg-light-gray"
            onClick={this.onSetSize3x2.bind(this)}>
            3 x 2
          </button>
          <button 
            className="mr2 pv2 ph3 br2 mb2 bn bg-moon-gray pointer bg-animate hover-bg-light-gray"
            onClick={this.onSetSize2x3.bind(this)}>
            2 x 3
          </button>
          <button 
            className="mr2 pv2 ph3 br2 mb2 bn bg-moon-gray pointer bg-animate hover-bg-light-gray"
            onClick={this.onSetSize3x3.bind(this)}>
            3 x 3
          </button>
          
        </div>
       
    ); 
  }

}

export default Config;