import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ position: 'relative', padding: '40px 0', maxWidth: '70%', margin: '0 auto' }}>
      {props.children}
    </div>
  );
};

export default Scroll;