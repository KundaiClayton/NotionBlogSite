import React, { ReactNode } from "react";
import NavBar from "../NavBar/NavBar";

type ILayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <NavBar />
      <>{children}</>
    </>
  );
};

export default Layout;
