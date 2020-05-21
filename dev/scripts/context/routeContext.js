import React, { createContext } from 'react';
import useRoute from '../hooks/useRoute';

export const RouteContext = createContext();

export function RouteContextProvider({ children }) {
  const route = useRoute();
  return (
    <RouteContext.Provider value={route}>{children}</RouteContext.Provider>
  );
}
