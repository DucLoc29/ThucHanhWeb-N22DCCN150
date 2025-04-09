import "./App.css";

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/aboutUs" exact element={<AboutUs />} />
            </Routes>
        </div>
    );
}

export default App;
