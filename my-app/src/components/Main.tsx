import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Data {
  color: string;
}

const Main: React.FC = () => {
  const [data, setData] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch('https://random-flat-colors.vercel.app/api/random?count=2');
      if (!res.ok) {
        console.log('Error fetching data');
      }
      const fetchedData: string[] = await res.json();
      setData(fetchedData);
      console.log(fetchedData);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <Link to='/colors' state={{ colors: data }} onClick={fetchData}>Fetch Colors</Link>
    </div>
  );
};

export default Main;
