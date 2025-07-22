// layouts/PageLayout.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

import { closeSidebar } from "../store/uiSlice/uiSlice"; // Redux action

const PageLayout = () => {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.ui.sidebarOpen);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-white p-6 shadow-lg z-50 relative">
        <Navbar />
      </header>

      {/* İçerik ve Sidebar */}
      <div className="flex flex-1 h-[calc(100vh-96px)] relative">
        <aside
          className={`
            bg-white
            md:bg-transparent
            px-8
            fixed top-0 left-0 h-full z-50
            w-4/5 max-w-xs
            transform transition-transform duration-300 ease-in-out
            md:static md:translate-x-0 md:w-1/5 md:block
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <Sidebar />
        </aside>

        {/* Mobile için backdrop */}
        {sidebarOpen && (
          <div
            onClick={() => dispatch(closeSidebar())}
            className="fixed inset-0 bg-transparent bg-opacity-10 z-40 md:hidden"
          ></div>
        )}

        {/* Sayfa içeriği */}
        <main className="flex-1 w-full md:w-4/5 bg-gray-100 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
