import React from "react";
import "./FilterSlider.css";

import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

class FilterSlider extends React.Component {
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
        />
      </div>
    );
  }
}

export default FilterSlider;
