import React from 'react';
import { faker } from '@faker-js/faker';
import ApprovalCard from './components/ApprovalCard';
import Comment from './components/Comment';

function App() {
  return (
    <div>
      <ApprovalCard>
        <Comment
          author={faker.name.fullName()}
          avatar={faker.image.avatar()}
          daysAgo={faker.datatype.number(5)}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author={faker.name.fullName()}
          avatar={faker.image.avatar()}
          daysAgo={faker.datatype.number(5)}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
