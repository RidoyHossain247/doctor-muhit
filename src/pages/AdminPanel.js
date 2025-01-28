import React from "react";
import NavbarLogIn from "../component/form/NavbarLogIn";
import DrawerLogin from "../component/form/DrawerLogin";
import TablePa from "../component/form/TablePa";

const AdminPanel = () => {
  return (
    <div>
      <NavbarLogIn />
      <DrawerLogin child={<TablePa />} />
    </div>
  );
};

export default AdminPanel;
