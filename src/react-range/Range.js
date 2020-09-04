import React from 'react';

import PropTypes from 'prop-types';

import RangeCss from './Range.css';

const Range = (props) => {
  const { min, max, value } = props;

  const [currentValue, setValue] = React.useState(value);

  const onChange = (event) => setValue(event.target.value);

  return (
    <>
      <style>{`${RangeCss}`}</style>
      <input type="range" data-testid="range-test" min={min} max={max} value={currentValue} onChange={onChange} />
    </>
  );
};

Range.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default Range;
