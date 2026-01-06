import { Link } from "react-router-dom";

export default function Header({ game }) {
  return (
    <header className="max-w-7xl mx-auto px-6 pt-16 pb-10">
      
      <h1 className="text-center text-4xl md:text-5xl font-electro font-bold mb-3">
        {game.name}
      </h1>

      <h2 className="text-center text-lg md:text-xl text-gray-300 mb-10">
        Released on <span className="font-semibold text-white">{game.released}</span>
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        <article className="leading-relaxed text-gray-200 text-sm md:text-base">
          <p>{game.description_raw}</p>
        </article>

        <article className="bg-black/50 backdrop-blur-md rounded-xl p-6 shadow-lg">
          
          <p className="text-xl mb-4">
            <span className="font-bold">Rating:</span>{" "}
            <span className="text-indigo-400">{game.rating}</span>
          </p>

          <p className="text-xl font-bold mb-3">Genres</p>

          <ul className="flex flex-wrap gap-3">
            {game.genres.map((genre) => (
                <Link to={`/genre/${genre.slug}`}
                    key={genre.id}
                    className="px-3 py-1 badge badge-primary">
                        {genre.name}
                </Link>
            ))}
          </ul>

        </article>
      </section>
    </header>
  );
}
