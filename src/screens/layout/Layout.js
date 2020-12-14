import React, { useState } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "../chat-screens/Chat";
import "./Layout.css";
import Login from "../../auth/login/Login"

function Layout() {
  const [user, setUser] = useState(null);
  return (
    <div className="layout">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="layout__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default Layout;
