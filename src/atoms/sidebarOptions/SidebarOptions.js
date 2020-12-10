import React from "react";
import SidebarLists from "../sidebarLists/SidebarLists";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function SidebarOptions() {
  return (
    <div className="sidebar__options">
      <SidebarLists Icon={InsertCommentIcon} title="Threads" />
      <SidebarLists Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarLists Icon={DraftsIcon} title="Saved items" />
      <SidebarLists Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarLists Icon={PeopleAltIcon} title="People & User groups" />
      <SidebarLists Icon={AppsIcon} title="Apps" />
      <SidebarLists Icon={FileCopyIcon} title="File browser" />
      <SidebarLists Icon={ExpandLessIcon} title="Show less" />
    </div>
  );
}

export default SidebarOptions;
