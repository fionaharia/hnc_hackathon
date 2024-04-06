import React from "react";
import Slider from '@mui/material/Slider';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export const RightBar = () => {
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
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 right-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li className="p-5">
              <div className="border-white rounded-xl border-2 h-32 w-full flex flex-col justify-center items-center relative">
                <p className="text-white text-2xl font-bold mb-4">Daily Quests</p>
                <div className="flex items-center justify-center w-full">
                  <FlashOnIcon className="mr-2 text-yellow-500" />
                  <Slider
                    disabled
                    defaultValue={30}
                    aria-label="Disabled slider"
                    sx={{ width: '80%' }}
                  />
                </div>
              </div>
            </li>
            <li className="p-5">
              <div className="border-white rounded-xl border-2 h-32 w-full flex flex-col justify-center items-center relative">
                <p className="text-white text-2xl font-bold mb-4">Progess Tracker</p>
                <div className="flex items-center justify-center w-full">
                  <LightbulbIcon className="mr-2 text-yellow-500" />
                  <Slider
                    disabled
                    defaultValue={10}
                    aria-label="Disabled slider"
                    sx={{ width: '80%' }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default RightBar;
