import React from 'react';
import Accordion from './Accordion';

const devData = [
  {
    title: 'What is a dog?',
    content:
      ' A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
  },
  {
    title: 'What kinds of dogs are there?',
    content:
      'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.',
  },
];

function App() {
  return <Accordion list={devData} />;
}

export default App;
