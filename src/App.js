// Import Data Array
import movies from "./data/data";

// Import Components
import MovieInformation from "./components/MovieInformation";

// Import Css
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <section className="movies">
          {movies.map((movie, index) => (
            <MovieInformation key={"Movies" + index} title={movie.title} year={movie.year} director={movie.director} duration={movie.duration} genre={movie.genre} rate={movie.rate} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
