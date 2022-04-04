import React from "react";
import { Outlet } from "react-router-dom";

function MultiLayout() {
  return (
    <div className="multi-container">
      <Outlet />
    </div>
  );
}

export default React.memo(MultiLayout);
