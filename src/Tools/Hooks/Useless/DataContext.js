import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const importData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, importData }}>
      {children}
    </DataContext.Provider>
  );
};
