import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import employersFilter from '../../utis/employersFilter';
import enployersDataFormater from '../../utis/enployersDataFormater';
import SearchBar from '../seachBar/SeachBar';
import Table from '../Table/TableDesktop';
import TableMobile from '../Table/TableMoblie';

const Conteiner = styled.div`
  width: 100vw;
  height: 100vmax;
  background-color: #f0f0f0;
`;
export default function MainPage() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filter, setFilter] = useState(data);
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
  enployersDataFormater(data);
  useEffect(() => {
    setFilter(employersFilter(data, searchName));
  }, [searchName]);
  return (
    <Conteiner>
      <Header />
      <PageTitle>
        <h1>Funcionários</h1>
        <SearchBar searchName={searchName} setSearchName={setSearchName} />
      </PageTitle>
      {window.innerWidth >= 800 ? <Table data={filter} /> : <TableMobile data={filter} />}
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
  @media (max-width: 800px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    justify-content: left;
    align-items: flex-start;
    padding-bottom: 14px;
    div {
      width: 100%;
    }
  }
`;
