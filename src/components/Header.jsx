import React from 'react';

const Header = () => {
  const headerStyle = {
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '10vh', // Adjust this value if needed
  };

  return (
    <div style={headerStyle}>
      <h2>Return Trip Checklist</h2>
    </div>
  );
};

export default Header;
