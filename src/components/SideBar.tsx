"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import SideBarLink from "./SideBarLink";
import LinkText from "./LinkText";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      variants={containerVariants}
      animate={containerControls}
      initial="close"
      className="bg-neutral-900 flex flex-col z-10 p-5 fixed top-0 left-0 h-full shadow shadow-neutral-600"
    >
    <div className="flex flex-row basis-1/6 w-full justify-between place-items-start ">

      <div>
      <img src="./images/aboutimg.png" className="w-10 h-10 rounded-full" alt="" />
      </div>
        
        <button
          className="p-1 rounded-full flex"
          onClick={() => handleOpenClose()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 stroke-neutral-200">

            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={svgVariants}
              animate={svgControls}
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            />
          </svg>
        </button>

      </div>
      
      <div className="flex flex-col basis-4/6 gap-3">

        <SideBarLink name="Home"  href="/" isOpen={isOpen}>
          <HomeIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </SideBarLink>

        <SideBarLink name="Dashboard" href="/tasks" isOpen={isOpen}>
          <AssignmentIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </SideBarLink>

        <SideBarLink name="Tasks" href="/calendar" isOpen={isOpen}>
          <CalendarMonthIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </SideBarLink>



       

      </div>

      <div className="flex items-center mt-auto ">
      <button className="flex items-center p-2 rounded-lg bg-neutral-400 hover:bg-neutral-600 text-gray-800 hover:text-gray-950 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
  <LinkText name="Sign Out" isOpen={isOpen}>
    <LogoutIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
  </LinkText>
</button>

      </div>
    
    </motion.nav>
  );
};

export default SideBar;
