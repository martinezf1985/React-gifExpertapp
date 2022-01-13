import axios from "axios";
import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifAxios = ({ category }) => {
  const [imagenes, setimages] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/search?limit=10&api_key=dEmhNP4LiC5o6zXaKrvQdJNV9GgUrglH&q"
      )
      .then((res) => {
        console.log(res.data);
        setimages(res.data.data);
        
      });
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {imagenes.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
export default GifAxios;
