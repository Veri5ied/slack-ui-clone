import React from 'react'
import SidebarLists from "../sidebarLists/SidebarLists";

function SidebarChannels() {
    return (
      <div className="sidebar__channels">
        <SidebarLists title="announcements" />
        <SidebarLists title="assignments" />
        <SidebarLists title="games" />
        <SidebarLists title="resources" />
        <SidebarLists title="random" />
      </div>
    );
}

export default SidebarChannels
