import React from 'react';
import { Outlet } from 'react-router-dom';

function EmptyLayout() {
  return (
    <div className="app-container-full">
      <Outlet />
    </div>
  );
}

export default React.memo(EmptyLayout);
