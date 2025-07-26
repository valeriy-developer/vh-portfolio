import React from "react";

const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="flex-1">{children}</main>;
};

export default Main;
