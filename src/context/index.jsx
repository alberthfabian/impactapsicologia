// import React, { useEffect, useMemo } from 'react';
import React, { useMemo, useState, useCallback } from 'react';

const Server = React.createContext();

export function ServerProvider(props) {

  const[ menu, setMenu ] = useState(false);

const modal = useCallback((e) => {
  setMenu(e);
},[]);

const value = useMemo(() => {
  return ({
    menu,
    modal
  })
}, [ menu, modal ]);

  return <Server.Provider value={value} {...props} />
}

export function useServer() {
  const context = React.useContext(Server);
  if (!context) {
    throw new Error('useServer debe estar dentro del proveedor Name')
  }
  return context;
}