import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./utils/ThemeContext";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ dentista }) => {
  const { theme } = useContext(ThemeContext);
  const { likesList, toggleLike } = useContext(ContextGlobal);
  const isLiked = likesList.some((item) => item.id === dentista.id);

  const handleToggleLike = () => {
    toggleLike(dentista);
  };

  const cardContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  };

  const favButtonStyle = {
    padding: "8px 16px",
    backgroundColor: "transparent",
    borderRadius: "4px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const likedFavButtonStyle = {
    ...favButtonStyle,
    backgroundColor: "#ff5722",
    color: "white",
  };

  const cardLinkStyle = {
    textDecoration: "none",
  };

  const cardStyle = {
    width: "300px",
    padding: "16px",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
    backgroundColor: theme.background,
  };

  const cardContentStyle = {
    fontSize: "16px",
    color: theme.font,
  };

  const cardNameStyle = {
    fontWeight: "bold",
  };

  const cardUsernameStyle = {
    marginBottom: "8px",
  };



  return (
    <div style={cardContainerStyle}>
      <button
        onClick={handleToggleLike}
        style={isLiked ? likedFavButtonStyle : favButtonStyle}
      >
        {isLiked ? "Remove fav" : "Add fav"}
      </button>
      <Link to={`detail/${dentista.id}`} style={cardLinkStyle}>
        <div style={cardStyle}>
          <div style={cardContentStyle}>
            <p style={cardNameStyle}>{dentista.name}</p>
            <p style={cardUsernameStyle}>{dentista.username}</p>
            <p >{dentista.id}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
