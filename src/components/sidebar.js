import React from "react";
import Icon from "./icon";
import Home from "../icons/iconfinder_ic_home_48px_3669170.png";
import Fire from "../icons/iconfinder_Icon_Element_Fire_03_513726.png";
import Subscriptions from "../icons/iconfinder_ic_subscriptions_48px_3669213.png";
import PlayList from "../icons/iconfinder_ic_playlist_play_48px_3669290.png"

export function Sidebar(props) {
  return <div className="sidebar">
    <Icon iconUrl = { Home } title="Inicio"/>
    <Icon iconUrl = { Fire } title="Tendencias"/>
    <Icon iconUrl = { Subscriptions } title="Suscripciones"/>
    <Icon iconUrl = { PlayList } title="Biblioteca"/>
  </div>;
}
