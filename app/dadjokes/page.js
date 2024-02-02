"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [jokes, setJokes] = useState("");
  const [search, setSearch] = useState("");
  const url = `https://icanhazdadjoke.com/search?term=${search}`;

  useEffect(() => {
    async function getJokes() {
      try {
        const res = await fetch(url, {
          headers: {
            Accept: "application/json",
          },
        });
        const result = await res.json();
        setJokes(result.results);
        console.log(jokes);
      } catch (error) {
        console.log(error);
      }
    }
    getJokes();

    return () => {};
  }, [search]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10">Dad Jokes</div>
        <input
          className="border focus:border-slate-200 px-4 py-2"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {jokes ? (
            jokes.map((x)=>(
                <div key={x.id} className="my-2">{x.joke}</div>
            ))
        ) : (<div>No Jokes Found.</div>)}
      </div>
    </>
  );
};

export default page;
