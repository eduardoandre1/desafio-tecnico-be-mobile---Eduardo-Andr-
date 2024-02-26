import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';

export default function MainPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://cities-qd9i.onrender.com/agents');
      const agents = await response.json();
      setData(agents);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
      <h1> header</h1>
      <h2> searct bar</h2>
      <Table data={data} />
    </>
  );
}
