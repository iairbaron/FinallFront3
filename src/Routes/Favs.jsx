import React, { useEffect, useState } from "react";

const Favs = () => {
  const [likesList, setLikesList] = useState([]);

  useEffect(() => {
    const storedLikes = localStorage.getItem("likes");
    if (storedLikes) {
      const parsedLikesList = JSON.parse(storedLikes);
      setLikesList(parsedLikesList);
    }
  }, []);

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div >
      <h2>Favorites</h2>
      {likesList.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <ul>
          {likesList.map((item) => (
            <li key={item.id}>
              {item.name} ({item.username})
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default Favs;
