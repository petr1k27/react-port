import './App.css';
import FilmDescriptionContainer from "./components/FilmDescription/FilmDescriptionContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import CV from "./components/CV/CV";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>

                <div className="content-wrapper">
                    <Routes>
                        <Route path="/" element={<CV/>}/>
                        <Route path="/portfolio" element={<FilmDescriptionContainer/>}/>
                    </Routes>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
