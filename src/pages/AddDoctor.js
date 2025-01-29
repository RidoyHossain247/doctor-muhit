import React from "react";
import FormDoctor from "../component/form/FormDoctors";
import NavbarLogIn from "../component/form/NavbarLogIn";
import DrawerLogin from "../component/form/DrawerLogin";

const AddDoctor = () => {
  return (
    <div>
      <NavbarLogIn />
      <DrawerLogin child={<FormDoctor />} />
    </div>
  );
};

export default AddDoctor;
