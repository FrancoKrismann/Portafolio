import React from "react";
import { ButtonNavbar } from "../../../style";

export default function Button(props) {
  return (
    <ButtonNavbar>
      <div
        onClick={props.handleButton}
        className={`icon nav-icon-5 ${props.clicked ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </ButtonNavbar>
  );
}
