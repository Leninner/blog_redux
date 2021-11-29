import React from 'react';
import { useParams } from 'react-router-dom';

const Publications = () => {
  const { key } = useParams();

  return (
    <div>
      <h1>{key}</h1>
    </div>
  );
};

export default Publications;
