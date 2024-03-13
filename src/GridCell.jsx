import React, { useState, useContext } from 'react';

const GridContext = React.createContext();

function GridCell({ toggleCell, isOn }) {
  const style = {
    width: '100px',
    height: '100px',
    border: '1px solid grey',
    backgroundColor: isOn ? 'black' : 'white',
  };

  return <div style={style} onClick={toggleCell}></div>;
}

export { GridCell, GridContext };