import React, { Fragment } from "react";
import MainFooter from "./main-footer";
import MainHeader from "./main-header";

const Layouts = (props) => {
  return (
    <Fragment>
      <MainHeader />
      {props.children}
      <MainFooter />
    </Fragment>
  );
};

export default Layouts;
