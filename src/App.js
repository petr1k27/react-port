import './App.css';
import Search from "./components/Search/Search";
import FilmDescriptionContainer from "./components/FilmDescription/FilmDescriptionContainer";

function App() {
  return (
      <div className="app-wrapper">
          <Search />
          <FilmDescriptionContainer />
      </div>
      );
}

export default App;
