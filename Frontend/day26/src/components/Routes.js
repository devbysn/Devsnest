import React from "react";
import { Switch, Route } from "react-router-dom";
import FormdataTable from "./FormdataTable";
import SignupForm from "./SignupForm";

function Routes() {
  return (
    <div>
      <Switch>
        <Route path={"/"} exact component={SignupForm}></Route>
        <Route path={"/viewlist"} exact component={FormdataTable}></Route>
      </Switch>
    </div>
  );
}

export default Routes;
