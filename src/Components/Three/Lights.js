import React from 'react';

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
    </>
  );
};

export default Lights;
