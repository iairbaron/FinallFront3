import axios from "axios";
import { createContext, useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";
export const ContextGlobal = createContext({});

export const ContextProvider = ({ children }) => {
  const [dentistas, setDentistas] = useState([]);
  const [likesList, setLikesList] = useState([]);

  useEffect(() => {
    axios(url).then((response) => {
      setDentistas(response.data);
    });
  }, []);

  const toggleLike = (dentista) => {
    const isLiked = likesList.some((item) => item.id === dentista.id);
    if (isLiked) {
      const updatedLikesList = likesList.filter((item) => item.id !== dentista.id);
      setLikesList(updatedLikesList);
    } else {
      const updatedLikesList = [...likesList, dentista];
      setLikesList(updatedLikesList);
    }
  };

  return (
    <ContextGlobal.Provider value={{ dentistas, likesList, toggleLike }}>
      {children}
    </ContextGlobal.Provider>
  );
};