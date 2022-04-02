import React from "react";
import { Outlet } from "react-router-dom";

function CompLayout() {
  return (
    <div className="comp-container">
      <Outlet />
    </div>
  );
}

export default React.memo(CompLayout);
