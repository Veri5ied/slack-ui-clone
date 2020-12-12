import React from "react";
import AddIcon from "@material-ui/icons/Add";
import SidebarLists from "../sidebarLists/SidebarLists";

function AddMore() {
  return (
    <div>
      <SidebarLists Icon={AddIcon} title="Add Channel" addNewChannel/>
    </div>
  );
}

export default AddMore;
