import React from "react";
import NavbarLogIn from "../component/form/NavbarLogIn";
import DrawerLogin from "../component/form/DrawerLogin";
import CardsLayout from "../component/form/CardsLayout";

const DoctorList = () => {
  return (
    <div>
      <NavbarLogIn />
      <DrawerLogin child={<CardsLayout />} />
    </div>
  );
};

export default DoctorList;
