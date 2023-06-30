import React, { useContext, useEffect } from "react";
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

  return (
    <div>
      <button onClick={handleToggleLike} className="favButton">
        {isLiked ? "Remove fav" : "Add fav"}
      </button>
      <Link to={`detail/${dentista.id}`}>
        <div className="card">
          <div style={{ color: theme.font }}>
            <p>{dentista.name}</p>
            <p>{dentista.username}</p>
            <p>{dentista.id}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
