import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import { element } from 'prop-types';

export const CepsContext = createContext();

export default function CepsProvider({ children }) {
  const [allCeps, setAllCeps] = useState(() => {
    const storagedCeps = localStorage.getItem('@GetCep: allCeps');
    if (storagedCeps) {
      return JSON.parse(storagedCeps);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GetCep: allCeps', JSON.stringify(allCeps));
  }, [allCeps]);

  return (
    <CepsContext.Provider value={{ allCeps, setAllCeps }}>
      {children}
    </CepsContext.Provider>
  );
}

export function useCeps() {
  const context = useContext(CepsContext);
  const { allCeps, setAllCeps } = context;
  return { allCeps, setAllCeps };
}

CepsProvider.propTypes = {
  children: element.isRequired,
};
