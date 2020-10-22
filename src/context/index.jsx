// import React, { useEffect, useMemo } from 'react';
// import React, { useMemo, useState, useCallback } from 'react';
import React, { useMemo } from 'react';

const Server = React.createContext();

export function ServerProvider(props) {

const value = useMemo(() => {
  return ({

  })
}, [  ]);

  return <Server.Provider value={value} {...props} />
}

export function useServer() {
  const context = React.useContext(Server);
  if (!context) {
    throw new Error('useServer debe estar dentro del proveedor Name')
  }
  return context;
}