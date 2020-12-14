import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="layout__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default Layout;
