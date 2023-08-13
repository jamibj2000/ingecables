import React from 'react';
import { useData } from './DataContext';

const DataTable = () => {
  const { data } = useData();

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nombre}</td>
            <td>{item.edad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
