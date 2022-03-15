import React from "react";
import "./menu-items.scss";
import { useNavigate } from "react-router-dom";
function Menu(props) {
  let navigate = useNavigate();
  return (
    <div
      className={`${props.size} menu-item`}
      onClick={() => navigate(`/${props.linkUrl}`)}
    >
      <div
        className="background-menu"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default Menu;
