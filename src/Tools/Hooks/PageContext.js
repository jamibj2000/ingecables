import React, { createContext, useContext, useEffect, useState } from 'react';

const PageContext = createContext();

export const usePage = () => {
  return useContext(PageContext);
};

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('');
  
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};
