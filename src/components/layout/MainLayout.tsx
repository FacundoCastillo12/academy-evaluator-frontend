import React, { ReactNode } from 'react';
import Navbar from '../home/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../home/footer/Footer';

type IMainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        {children}
      </main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default MainLayout;
