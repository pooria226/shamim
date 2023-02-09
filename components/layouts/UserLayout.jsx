import React, { useEffect, useState } from "react";
import Head from "next/head";
import SidebarItem from "components/includes/SidebarItem";
import UserHeader from "components/includes/UserHeader";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "@/store/actions/sidebar";
import SidebarDrawer from "../shared/SidebarDrawer";
import { handleDarkTheme, handleLightTheme } from "@/store/actions/theme";
const UserLayout = ({ children, title }) => {
  //***************************
  // define hooks
  //***************************
  const router = useRouter();
  const dispatch = useDispatch();
  // *********************
  // store state
  // *********************
  const sidebar = useSelector((state) => state?.sidebar?.sidebar);
  const theme = useSelector((state) => state?.theme?.theme);
  //***************************
  // define state
  //***************************
  const AppName = process.env.NEXT_PUBLIC_APPNAME;
  const [inMobile, setInMobile] = useState(false);
  //***************************
  // define function
  //***************************
  const handleToggleSidebar = () => {
    if (sidebar) {
      dispatch(closeSidebar());
    } else {
      if (window.innerWidth < 768) {
        setInMobile(true);
      } else {
        setInMobile(false);
      }
      dispatch(openSidebar());
    }
  };
  const handleChangeTheme = () => {
    if (theme) {
      dispatch(handleDarkTheme());
    } else {
      dispatch(handleLightTheme());
    }
  };
  const handleEventResize = () => {
    if (typeof window !== "undefined") {
      window.addEventListener(
        "resize",
        function (e) {
          if (window.innerWidth < 768) {
            setInMobile(true);
          }
        },
        true
      );
    }
    if (window.innerWidth < 768) {
      setInMobile(true);
    }
  };
  // ***************************
  // define useEffect
  // ***************************
  useEffect(() => {
    (async () => await Promise.all([handleEventResize()]))();
  }, []);
  useEffect(() => {
    if (theme) {
      document.querySelector("body").classList.add("light-body");
      document.querySelector("body").classList.remove("dark-body");
    } else {
      document.querySelector("body").classList.add("dark-body");
      document.querySelector("body").classList.remove("light-body");
    }
  }, [theme]);
  return (
    <div>
      <Head>
        <title>
          {AppName} | {title}
        </title>
      </Head>
      <div>
        <UserHeader
          handleChangeTheme={handleChangeTheme}
          theme={theme}
          handleToggleSidebar={handleToggleSidebar}
        />
        <div className="flex">
          <div className="content w-full md:pr-2">{children}</div>
          <SidebarItem
            theme={theme}
            handleToggleSidebar={handleToggleSidebar}
            sidebar={sidebar}
            router={router}
          />
        </div>
      </div>
      <SidebarDrawer
        router={router}
        open={sidebar && inMobile}
        sidebar={sidebar}
        onClose={() => dispatch(closeSidebar())}
      />
    </div>
  );
};

export default UserLayout;
