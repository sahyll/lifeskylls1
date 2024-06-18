import SidebarItems from './SidebarItems';
import Profile from './Profile';
import SidebarComponent from './SidebarComponent';

const SidebarSm = ({ isOpen, closeSidebar }) => (
  <div
    className={`fixed inset-0 z-40 flex transform bg-black bg-opacity-25 transition-transform duration-300 ease-in-out md:hidden ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
    onClick={closeSidebar}
  >
    
    <div className="relative flex w-64 max-w-xs flex-1 flex-col bg-[#f4f2fa] focus:outline-none overflow-y-auto rounded-lg">
    <div className="flex items-center justify-center flex-shrink-0 px-4 mt-8">
            <img className="h-8 w-auto mr-4" src="/placeholder.png" alt="Life Skills" />
    </div>
    <Profile name="Nikhil Gupta" progress={60} imageUrl="/Profile.png"/>
    <div className="border-t mb-5 border-gray-300"></div>
    <SidebarComponent />
    </div>
    <div className="w-14 flex-shrink-0" aria-hidden="true" />
  </div>
);

export default SidebarSm;
