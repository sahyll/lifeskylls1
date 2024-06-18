import { useState } from "react";
import SidebarSm from './SidebarSm';
import Header from "./Header";
import MainContent from "./MainContent";
import SidebarItems from "./SidebarItems";
import SidebarLg from "./SidebarLg";
import Footer from "./Footer";

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div className="flex h-screen">
      <SidebarSm isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <SidebarLg />
      <div className="flex flex-col flex-1 md:pl-64">
        <Header toggleSidebar={toggleSidebar} />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}
