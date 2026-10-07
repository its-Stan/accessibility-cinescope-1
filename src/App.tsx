import { useMemo, useState } from "react";
import posterAube from "./assets/aube.svg";
import posterMemoire from "./assets/memoire.svg";
import posterOrbite from "./assets/orbite.svg";

const films = [
  { id: 1, title: "Après l’aube", genre: "Drame", time: "18 h 10", available: true, poster: posterAube },
  { id: 2, title: "La mémoire des murs", genre: "Documentaire", time: "19 h 30", available: false, poster: posterMemoire },
  { id: 3, title: "Orbite 9", genre: "Science-fiction", time: "21 h 00", available: true, poster: posterOrbite },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredFilms = useMemo(
    () => films.filter((film) => film.title.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const toggleFavorite = (id: number) => {
    setFavorites((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]);
  };

  return (
    <>
      <header>
        <nav className="topbar" aria-label="Navigation principale">
          <button type="button" className="brand" aria-label="Logo de CinéScope" onClick={() => setQuery("")}>CinéScope</button>
          <ul className="menu">
            <li><a href="#programme">Programme</a></li>
            <li><a href="#infos">Informations</a></li>
          </ul>
        </nav>
      </header>

      <main className="page">
        <h1>Films à l’affiche</h1>
        <p className="intro">Découvrez la programmation de cette semaine.</p>

        <div className="search-container">
          <label
            htmlFor="movie-search"
            className="sr-only"
          >
            Rechercher un film
          </label>

          <input
            id="movie-search"
            className="search"
            placeholder="Rechercher un film"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <ul id="programme" className="film-grid">
          {filteredFilms.map((film) => (
            <li key={film.id}>
              <article className="film-card">
                <button 
                  type="button"
                  className="film-card-trigger" 
                  onClick={() => setSelected(film.title)}
                  aria-label={`Sélectionner le film ${film.title}`}
                >
                  <img src={film.poster} alt={`Affiche du film ${film.title}`} />      
                  <div className="film-content">
                    <div 
                      className={film.available ? "availability available" : "availability unavailable"} 
                      aria-label={film.available ? "Disponible" : "Indisponible"}
                      title={film.available ? "Disponible" : "Indisponible"}
                    />
              
                    <h4>{film.title}</h4>
                    <p>{film.genre} · {film.time}</p>
                  </div>
                </button>

                <button
                  type="button"
                  className="favorite"
                  aria-pressed={favorites.includes(film.id)}
                  aria-label={favorites.includes(film.id) ? `Retirer ${film.title} des favoris` : `Ajouter ${film.title} aux favoris`}
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleFavorite(film.id);
                  }}
                >
                  <span aria-hidden="true">{favorites.includes(film.id) ? "★" : "☆"}</span>
                </button>
              </article>
            </li>
          ))}
        </ul>

        <div aria-live="polite" className="selection-status">
          {selected && <p id="infos" className="selection">Film sélectionné : {selected}</p>}
        </div>
      </main>
    </>
  );
}

