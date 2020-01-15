import React from "react";
import "./FilterSlider.css";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class FilterSlider extends React.Component {
  componentDidMount() {
    this.forceUpdate(); // Force redraw to fix tooltip position
  }

  onChange = data => {
    this.props.onChange({
      type: this.props.data.label,
      value: { min: data[0], max: data[1] }
    });
  };

  render() {
    const { min, max, step, value, label } = this.props.data;

    const marks = {};
    marks[min] = min;
    marks[max] = max;

    return (
      <div className="slider">
        <label>{label}</label>
        <Range
          marks={marks}
          min={min}
          max={max}
          onAfterChange={this.onChange}
          step={step}
          defaultValue={[value.min, value.max]}
          tipProps={{ placement: "bottom", visible: true }}
          sliderTrackStyle={{ backgroundColor: 'blue', height: 10 }}
          handleStyle={{
            borderColor: "#a75d65",
            backgroundColor: "white"
          }}
        />
      </div>
    );
  }
}

export default FilterSlider;
