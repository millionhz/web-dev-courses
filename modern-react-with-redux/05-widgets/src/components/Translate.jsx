import React, { useState } from 'react';
import Dropdown from './Dropdown';
import TextInput from './TextInput';

const languages = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
];

function Translate() {
  const [langIdx, setLangIdx] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <TextInput
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Dropdown
        label="Select Language"
        options={languages}
        selected={langIdx}
        onSelectedChange={setLangIdx}
      />
    </div>
  );
}

export default Translate;
