import React, { useMemo } from 'react';
import { useSortBy, useTable } from 'react-table';
import styled from 'styled-components';

const Table = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: 'Photo', accessor: 'image' },
      { Header: 'nome', accessor: 'name' },
      { Header: 'Cargo', accessor: 'job' },
      { Header: 'Data de Adimissão', accessor: 'admission_date' },
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
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
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
  }
  th {
    background: linear-gradient(180deg, #5a84c0 0%, #594ed2 100%);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 8px 8px 0px 0px;
    padding: 14px 0px;
    gap: 32px;
  }
`;
