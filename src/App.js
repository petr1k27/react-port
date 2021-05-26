import './App.css';
import SearchFormComponent from "./Header/SearchForm/SearchFormComponent";
import FilmDescriptionContainer from "./components/FilmDescription/FilmDescriptionContainer";
import SearchContainer from "./Header/HeaderContainer";
import HeaderContainer from "./Header/HeaderContainer";

function App() {
  return (
      <div className="app-wrapper">
          <HeaderContainer />
          <FilmDescriptionContainer />
      </div>
      );
}

export default App;
