import React, { useState } from 'react';
import '../Component/BgColor.css';

function BgColor() {
  const [bgColor, setBgColor] = useState('bg-dark');

  const handleColorChange = (newColor) => {
    setBgColor(newColor);
  };

  return (
    <div className={`text-white ${bgColor}`}>
      <div className='d-flex justify-content-center align-items-center flex-column vh-100'>
        <h1>Background Color Change</h1>
        <div>
          <button className='btn btn-light m-2' onClick={() => handleColorChange('bg-red')}>RED</button>
          <button className='btn btn-light m-2' onClick={() => handleColorChange('bg-green')}>GREEN</button>
          <button className='btn btn-light m-2' onClick={() => handleColorChange('bg-blue')}>BLUE</button>
          <button className='btn btn-light m-2' onClick={() => handleColorChange('bg-purple')}>PURPLE</button>
        </div>
      </div>
    </div>
  );
}

export default BgColor;
