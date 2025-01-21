import { LayoutComponent, Outlet, useLocation } from "rasengan";
import React, { useEffect } from "react";

const AppLayout: LayoutComponent = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log("log");
  }, [pathname]);
  return (
    <React.Fragment>
      layout
      <Outlet />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;
