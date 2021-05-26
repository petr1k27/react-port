import './App.css';
import FilmDescriptionContainer from "./components/FilmDescription/FilmDescriptionContainer";
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
