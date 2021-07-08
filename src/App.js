import "./App.css";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import Recipe from "./components/Recipe/Recipe";
import {useEffect} from "react";
import {useSelector} from "react-redux";
function App() {
    useEffect(() => {
        window.location.hash = "";
    }, []);

    return (
        <div className="App">
            <Header/>
            <Results/>
            <Recipe/>
        </div>
    );
}

export default App;
