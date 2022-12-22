import React from "react";
import Experience from "./Experience/Experience";
import Contacts from "./Contacts/Contacts";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

function UserCV() {
  return (
    <div className="container">
    <PersonalInfo />
    <div className="conatiner">
      <Experience />
      <Contacts />
    </div>
  </div>
  );
}
export default UserCV;
