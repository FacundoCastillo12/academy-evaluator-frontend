import React, { ReactNode } from 'react';
import Navbar from '../home/navbar/Navbar';

type IMainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
