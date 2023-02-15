import React from "react";
import { Header } from "./header";

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="wrapper">
      <Header />
      {children}
    </div>
  );
}

export default AppLayout;
