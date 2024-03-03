import { useEffect, useState } from 'react';

import employersFilter from '../../components/defautsFunctions/employers/employersFilter';
import enployersDataFormater from '../../components/defautsFunctions/employers/enployersDataFormater';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/seachBar/SeachBar';
import { Conteiner } from './style.MainPage';
import { PageTitle } from './style.MainPage';
import Table from './Table/tableDesktop/TableDesktop';
import TableMobile from './Table/tableMobile/TableMoblie';

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
      setFilter(employees);
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
