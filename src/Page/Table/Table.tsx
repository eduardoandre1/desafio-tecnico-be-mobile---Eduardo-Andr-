import React, { useMemo } from 'react';
import { useSortBy, useTable } from 'react-table';
import styled from 'styled-components';


const Table = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: 'foto', accessor: 'image' },
      { Header: 'nome', accessor: 'name' },
      { Header: 'Cargo', accessor: 'job' },
      { Header: 'Data de Admissão', accessor: 'admission_date' },
      { Header: 'telefone', accessor: 'phone' },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data },
    useSortBy,
  );

  return (
    <TableStyle>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            let cell = row.cells.map((cell)=>{
                if (cell.column.Header == "foto"){return <td {...cell.getCellProps()}> <img src={cell.value} alt="" /></td>}
                else{return <td {...cell.getCellProps()}>{cell.value}</td>}})
            return (
              <tr {...row.getRowProps()}>
                {cell}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableStyle>
  );
};

export default Table;

const TableStyle = styled.div`
  table {
    border-collapse: collapse;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    margin-left: auto;
    margin-right: auto;

  }
  thead {
    background: linear-gradient(180deg, #5a84c0 0%, #594ed2 100%);
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 16px 16px 0px 0px;
    padding: 14px 0px;
    gap: 32px;
    color : white;
    text-align: start;
  }
  th {
    text-align: start;
    width: fit-content;
    justify-items: center;
    align-items: center;
  }
  tr {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    height: 49px;
    justify-content: center;
    text-align: start;
    border-bottom: #ddd solid 2px;

  }
  tr:hover {background-color: coral;}
  tbody {
    
    img {
       height: 5em;
       width: 5em;
       border-radius: 50%;
       align-self: center;
       display: flex;
       justify-self: center;
    }
  }
  td {
    justify-content: center;
    align-content: center;
  }
`;
