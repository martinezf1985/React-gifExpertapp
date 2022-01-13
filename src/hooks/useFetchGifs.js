import { useState, useEffect } from "react";
import { GetGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    GetGifs(category).then((img) => {
      console.log(img);
      setstate({
        data: img,
        loading: false
      });
    });
  }, [category]);

  return state; //{data:[], loading:true};
};
