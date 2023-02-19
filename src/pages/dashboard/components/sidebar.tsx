import SidebarItem from './sidebar-item';

import { IoAppsOutline, IoCalendarOutline, IoPeopleOutline } from 'solid-icons/io';

export default function Sidebar() {
  return (
    <div class="bg-dark-500 text-white px-5 py-8 h-full">
      <h2 class="text-primary-500">SmartSocial</h2>
      <SidebarItem title="Dashboard" icon={<IoAppsOutline size={20} />} linkTo="/dashboard" />
      <SidebarItem title="My Posts" icon={<IoAppsOutline size={20} />} linkTo="/posts" />
      <SidebarItem title="Schedule" icon={<IoCalendarOutline size={20} />} linkTo="/schedule" />
      <SidebarItem title="Teams" icon={<IoPeopleOutline size={20} />} linkTo="/schedule" />
    </div>
  );
}
