import React, { useMemo } from 'react';
import { useSortBy, useTable } from 'react-table';
import styled from 'styled-components';
import { TableStyle } from './style.TableDesktop';


const Table = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: 'FOTO', accessor: 'image' },
      { Header: 'NOME', accessor: 'name' },
      { Header: 'CARGO', accessor: 'job' },
      { Header: 'DATA DE ADMISSÃO', accessor: 'admission_date' },
      { Header: 'TELEFONE', accessor: 'phone' },
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
                if (cell.column.Header == "FOTO"){return <td {...cell.getCellProps()}> <img src={cell.value} alt="" /></td>}
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

