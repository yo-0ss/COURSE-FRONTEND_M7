import { useState, useEffect } from "react";

export default function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <section className="w-full m-auto flex flex-col items-center">
      <h1 className="bg-amber-200 w-full p-7 text-center font-extrabold text-5xl">
        Rick and Morty Characters
      </h1>
      {loading ? (
        <p className="text-2xl p-1.5 font-bold h-18 text-center">Loading...</p>
      ) : (
        <section className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((character) => (
            <div className="bg-amber-100 " key={character.id}>
              <h2 className="text-2xl p-1.5 font-bold h-18 text-center content-center">
                {character.name}
              </h2>
              <img className="w-full" src={character.image} alt={character.name} />
              <p className="text-xl">Status: {character.status}</p>
              <p className="text-xl">Species: {character.species}</p>
            </div>
          ))}
        </section>
      )}
    </section>
  );
}
