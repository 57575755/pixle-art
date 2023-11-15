import React, { useState, useEffect } from 'react';

function InputValue2({ color, isMouseDown, sellSize }) {
  const [backgroundColor, setBackgroundColor] = useState(null);

  const changeColor = () => {
    if(isMouseDown) {
      setBackgroundColor(color)
    } 
  }

  function ChangeColor() {
    setBackgroundColor(color)
  }

  return (
    <div>
      <div
        style={{height: sellSize, width: sellSize, background: backgroundColor}}
       onMouseMove={changeColor} 
       className="grid2"
       onClick={ChangeColor}>
       </div>
    </div>
  );
}

export default InputValue2; 

