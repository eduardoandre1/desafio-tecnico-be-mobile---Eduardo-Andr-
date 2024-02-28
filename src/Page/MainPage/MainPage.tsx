import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../Header/Header';
import Table from '../Table/TableDesktop';
import SearchBar from '../seachBar/SeachBar';

const Conteiner = styled.div`
  width: 100 vw;
  height: 100vmin;
  background-color:  #F0F0F0;
`;
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
      <PageTitle>
        <h1>Funcionarios</h1>
        <SearchBar />
      </PageTitle>
      <Table data={data} />
    </Conteiner>
  );
}

const PageTitle = styled.div`
height: 111px;
width: 90%;
margin-left: auto;
margin-right: auto;
justify-content: space-between;
align-items: center;
display: flex;
flex-direction: row;

` 
