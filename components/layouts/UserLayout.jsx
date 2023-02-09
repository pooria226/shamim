import React from "react";
import Head from "next/head";
import SidebarItem from "components/includes/SidebarItem";
import UserHeader from "components/includes/UserHeader";
import { useRouter } from "next/router";
const UserLayout = ({ children, title }) => {
  //***************************
  // define hooks
  //***************************
  const router = useRouter();
  //***************************
  // define RecoilState
  //***************************

  //***************************
  // define state
  //***************************
  const AppName = process.env.NEXT_PUBLIC_APPNAME;
  //***************************
  // define function
  //***************************

  // ***************************
  // define useEffect
  // ***************************

  return (
    <div>
      <Head>
        <title>
          {AppName} | {title}
        </title>
      </Head>
      <div>
        <UserHeader />
        <div className="flex">
          <div className="content w-full">{children}</div>
          <SidebarItem router={router} />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
