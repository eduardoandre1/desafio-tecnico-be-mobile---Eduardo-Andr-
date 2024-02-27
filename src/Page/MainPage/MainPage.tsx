import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Table from '../Table/Table';
import Header from '../Header/Header';

const Conteiner = styled.div`
width: 100 vw;
height: 100 vh;
body {
    background-color: azure;
}
`
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
    <Conteiner>
        <Header />
      <h2> searct bar</h2>
      <Table data={data} />
    </Conteiner>
      
  );
}


