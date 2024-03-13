import React, { useState } from 'react';
import { GridCell, GridContext } from './GridCell';

function Grid() {
  const [cells, setCells] = useState([false, false, false, false]);
  const toggleCell = (index) => {
    const newCells = [...cells];
    newCells[index] = !newCells[index];
    setCells(newCells);
  };

  const countOn = cells.filter(isOn => isOn).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>Count: {countOn}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)', gap: '10px' }}>
        {cells.map((isOn, index) => (
          <GridCell key={index} isOn={isOn} toggleCell={() => toggleCell(index)} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
