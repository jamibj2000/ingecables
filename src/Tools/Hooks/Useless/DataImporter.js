import React, { useState } from 'react';
import { useData } from './DataContext';

const DataImporter = () => {
  const { importData } = useData();
  const [newData, setNewData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleImport = () => {
    const parsedData = inputValue
      .trim()
      .split('\n')
      .map((line) => {
        const [nombre, edad] = line.split(',');
        return { nombre, edad: parseInt(edad, 10) };
      });

    setNewData(parsedData);
    importData(parsedData);
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Ingrese nombre y edad separados por coma (por ejemplo: Juan,25)"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleImport}>Importar</button>
    </div>
  );
};

export default DataImporter;
