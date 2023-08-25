import React from "react";

export default function FavouriteProjects() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center">
            My Projects
          </h1>
        </header>

        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8 lg:-mt-8">
          {/* Single card */}
          <a
            href="https://henry-gaming.ar/"
            className="w-full block col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/gaming.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Henry Gaming
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://pokemon-pi-sigma.vercel.app/"
            className="w-full block col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/pokemon.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Pokemon PI
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="rickandmortyvercel"
            className="w-full block col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden shadow-2xl">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/rickandmorty.jpg"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Rick and Morty API
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
