import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  { value: 'red', label: 'Saturated Red' },
  { value: 'blue', label: 'Dark Blue' },
  { value: 'green', label: 'Boring Green' },
];

function App() {
  const [selection, setSelection] = useState(0);

  return (
    <Dropdown
      options={options}
      selected={selection}
      onSelectedChange={setSelection}
      title="Select a Color"
    />
  );
}

export default App;
