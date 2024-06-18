// SidebarNav.js
import React from 'react';
import SidebarItems from './SidebarItems';

const SidebarComponent = () => {
  return (
    <div className="flex flex-col flex-grow overflow-y-auto px-4">
      <nav className="flex-1 space-y-1">
        <SidebarItems href="#" icon="/Icon1.png" label="Dashboard" />
        <SidebarItems href="#" icon="/Icon2.png" label="Profile" />
        <SidebarItems href="#" icon="/Icon3.png" label="Mentoring Session" />
        <SidebarItems href="#" icon="/Icon4.png" label="Courses" />
        <SidebarItems href="#" icon="/Icon5.png" label="Resources" />
        <SidebarItems href="#" icon="/Icon6.png" label="SoShorts" />
        <SidebarItems href="#" icon="/Icon7.png" label="Notifications" />
        <SidebarItems href="#" icon="/Icon8.png" label="Payments" />
        <SidebarItems href="#" icon="/Icon10.png" label="Onboarding" />
        <SidebarItems href="#" icon="/Icon10.png" label="Assessments" />
        <SidebarItems href="#" icon="/Icon12.png" label="Survey" />
        <SidebarItems href="#" icon="/Icon13.png" label="Log Out" />
      </nav>
    </div>
  );
};

export default SidebarComponent;
