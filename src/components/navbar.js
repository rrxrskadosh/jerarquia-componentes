import React from "react";
import Logo from "./logo";
import SearchBar from "./search-bar";
import Icon from "./icon";
import Login from "./login";
import LogoYoutube from "../icons/iconfinder_youtube_294703.png";
import VideoCam from "../icons/iconfinder_ic_videocam_48px_3669181.png";
import Module from "../icons/iconfinder_ic_view_module_48px_3669149.png";
import Bell from "../icons/iconfinder_icon-ios7-bell_211694.png"
/* Importar los componentes */

/* Importar los iconos */

export default function Navbar(props) {
  return <div className="navbar">
    <Logo logo = { LogoYoutube } />
    <SearchBar />
    <Icon iconUrl = { VideoCam } />
    <Icon iconUrl = { Module } />
    <Icon iconUrl = { Bell } />
    <Login />
    
  </div>;
}
