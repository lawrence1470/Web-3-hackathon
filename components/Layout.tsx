import React, { ReactNode, FC } from "react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="max-w-screen-2xl px-16 md:px-24 mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
