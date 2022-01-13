import React from "react";

import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { data: images, loading } = useFetchGifs(category);

  console.log(loading);

  // useEffect(() => {
  //   GetGifs(category)
  //   .then(setImages);
  // }, []);

  return (
    <>
      <h3 className={"card animate__animated animate__fadeIn"}>{category}</h3>

      {loading && (
        <p className="card animate__animated animate__flash">loadinig</p>
      )}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
export default GifGrid;
