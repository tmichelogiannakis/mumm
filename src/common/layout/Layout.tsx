import React, { FunctionComponent, Fragment } from 'react';

type LayoutProps = {  };

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <div>Toolbar, Sidebar</div>
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
