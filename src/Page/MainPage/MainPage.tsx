import React, { useEffect, useState } from 'react';

import Table from '../Table/Table';
import Header from '../Header/Header';

export default function MainPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/employees');
      const employees = await response.json();
      setData(employees);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
      <Header />
      <h2> searct bar</h2>
      <Table data={data} />
    </>
  );
}
