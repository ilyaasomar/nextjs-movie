import Image from "next/image";
import React from "react";

const MovieDetail = async ({ params }) => {
  const imagePath = "https://image.tmdb.org/t/p/original/";
  const { movie } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 0 } }
  );
  const res = await data.json();
  console.log(res);

  return (
    <div>
      <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded">
          {res.status}
        </h2>
        <Image
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
          priority
          className="my-12 w-full"
        />
        <p>{res.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
