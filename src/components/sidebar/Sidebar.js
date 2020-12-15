import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOptions from "../../atoms/sidebarOptions/SidebarOptions";
import SidebarChannels from "../../atoms/sidebarChannels/SidebarChannels";
import ExpandMore from "../../atoms/expandMore/ExpandMore";
import AddMore from "../../atoms/addMore/AddMore";
import "./Sidebar.css";
import { useStateValue } from "../../context/StoreContext";

function Sidebar() {
  const [{ user }] = useStateValue();

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Veri5ied Workspace</h2>
          <h3>
            <FiberManualRecordIcon />
            Alvin Uchenna
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOptions />
      <hr />
      <ExpandMore />
      <hr />
      <AddMore />
      <SidebarChannels />
    </div>
  );
}

export default Sidebar;
