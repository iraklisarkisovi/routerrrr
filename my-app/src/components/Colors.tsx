import React from 'react';
import { useLocation } from 'react-router-dom';

const Colors: React.FC = () => {
  const location = useLocation();
  const colors: string[] = location.state?.colors || []; 
 console.log(colors)
  return (
    <div>
      <h1>Fetched Colors:</h1>
      {colors.map((color, index) => (
        <div key={index} style={{ backgroundColor: color, padding: '20px', margin: '10px' }}>
          <h2>{color}</h2>
        </div>
      ))}
    </div>
  );
};

export default Colors;
