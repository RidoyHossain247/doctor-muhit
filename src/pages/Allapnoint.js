import React from "react";
import NavbarLogIn from "../component/form/NavbarLogIn";
import DrawerLogin from "../component/form/DrawerLogin";
import AllAponment from "../component/form/AllAponment";

const Allapnoint = () => {
  return (
    <div>
      <NavbarLogIn />
      <DrawerLogin child={<AllAponment />} />
    </div>
  );
};

export default Allapnoint;
