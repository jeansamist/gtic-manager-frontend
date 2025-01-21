import React, { ReactNode } from "react";

export const Root = ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      root
      {children}
    </React.Fragment>
  );
};
