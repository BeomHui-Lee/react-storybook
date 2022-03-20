import React from 'react';
import {Button} from "../../stories/Button";

const ClearButton = ({onClick}) => {
  return (
    <Button primary label={"리셋"} onClick={onClick}/>
  );
}

// export default ClearButton;
export default React.memo(ClearButton);
