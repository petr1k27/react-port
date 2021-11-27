import './App.css';
import FilmDescriptionContainer from "./components/FilmDescription/FilmDescriptionContainer";
import Header from "./components/Header/Header";
import CV from "./components/CV/CV";
import {Route, Routes,} from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
    return (
            <div className="app-wrapper">
                <Header/>
                <main className="content-wrapper">
                    <Routes>
                        <Route path="/" element={<CV/>}/>
                        <Route path="/portfolio" element={<FilmDescriptionContainer/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
    );
}

export default App;
