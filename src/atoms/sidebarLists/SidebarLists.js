import React from "react";
import "./SidebarLists.css";

function SidebarLists({ Icon, title }) {
  return (
    <div className="sidebarLists">
      {Icon && <Icon className="sidebarLists__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarLists__channels">
          <span className="sidebarLists__hashtag">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarLists;
