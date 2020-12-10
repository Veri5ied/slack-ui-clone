import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarLists from "../sidebarLists/SidebarLists";

function ExpandMore() {
  return (
    <div>
      <SidebarLists Icon={ExpandMoreIcon} title="Channels" />
    </div>
  );
}

export default ExpandMore;
