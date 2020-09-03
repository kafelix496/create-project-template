import React from 'react';
import testCss from './index.css';

const Test = () => {
  const testValue = 'test';

  return (
    <>
      <style>{testCss}</style>
      <div>{testValue}</div>
    </>
  );
};

export default Test;
