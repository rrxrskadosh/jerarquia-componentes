import React from "react";
import VideoThumbnail from "./video-thumbnail";
import Picture1 from "../images/video1.jpg";
import Picture2 from "../images/video2.jpg";
import Picture3 from "../images/video3.jpg";
import Picture4 from "../images/video4.jpg";
import Picture5 from "../images/video5.jpg";
import Picture6 from "../images/video6.jpg";
import Picture7 from "../images/video7.jpg";
import Picture8 from "../images/video8.jpg";

export function ThumbContainer() {
  return <div className="thumb-container">
    <VideoThumbnail image = {Picture1} />
    <VideoThumbnail image = {Picture2} />
    <VideoThumbnail image = {Picture3} />
    <VideoThumbnail image = {Picture4} />
    <VideoThumbnail image = {Picture5} />
    <VideoThumbnail image = {Picture6} />
    <VideoThumbnail image = {Picture7} />
    <VideoThumbnail image = {Picture8} />
  </div>;
}

//thumbContainer lleva 8