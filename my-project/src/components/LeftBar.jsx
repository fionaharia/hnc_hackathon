import React from "react";
import { Link } from "react-router-dom";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExtensionIcon from '@mui/icons-material/Extension';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import Person2Icon from '@mui/icons-material/Person2';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export const LeftBar = () => {
  const navItems = [
    { text: "Lessons", icon: <MenuBookIcon />, path: "/quiz" },
    { text: "Puzzles", icon: <ExtensionIcon />, path: "/puzzles" },
    { text: "Audio", icon: <SpatialTrackingIcon />, path: "/audio" },
    { text: "Chat", icon: <MarkUnreadChatAltIcon />, path: "/chat" },
    { text: "Profile", icon: <Person2Icon />, path: "/profile" },
    { text: "LeaderBoard", icon: <LeaderboardIcon />, path: "/leaderboard" }
  ];

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {item.icon && <span className="mr-3">{item.icon}</span>}
                  <span className="flex-1 ms-3 whitespace-nowrap">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};
