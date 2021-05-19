import './App.css';
import Search from "./components/Search/Search";
import FilmDescription from "./components/FilmDescription/FilmDescription";

function App() {
  return (
      <div className="app-wrapper">
          <Search />
          <FilmDescription />
      </div>
      );
}

export default App;
