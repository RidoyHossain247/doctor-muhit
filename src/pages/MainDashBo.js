import React from "react";
import MainDash from "../component/form/MainDash";
import NavbarLogIn from "../component/form/NavbarLogIn";
import DrawerLogin from "../component/form/DrawerLogin";

const MainDashBo = () => {
  return (
    <div>
      <NavbarLogIn />
      <DrawerLogin child={<MainDash />} />
    </div>
  );
};

export default MainDashBo;
