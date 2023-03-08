import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  console.log("movieId", movieId);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      console.log("request", request);
      console.log("movie.backdrop_path", movie.backdrop_path);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);

  if (!movieId) return <div>영화를 가지고 오는 중...</div>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
}
