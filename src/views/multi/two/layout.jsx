import React from 'react';
import { Outlet } from 'react-router-dom';

function MultiTwoLayout() {
  return (
    <div className="multi-two-container">
      <Outlet />
    </div>
  );
}

export default React.memo(MultiTwoLayout);
