import React, { useState, useMemo, useCallback } from 'react';
import ClearButton from './ClearButton';

const UseCallback_1 = () => {
  const [number, setNumber] = useState(0);

  const reset = () => {
    setNumber(0);
  }

  return (
    <>
      {/*<div style={{fontSize:"100px"}} onClick={()=>{setNumber(number+1)}}>{number}</div>*/}
      <div style={{fontSize:"100px"}} onClick={
        useCallback(()=>{setNumber(number+1)}, [number])
      }>{number}</div>
      <ClearButton onClick={reset}/>
    </>
  );
}

export default UseCallback_1;