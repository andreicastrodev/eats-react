import "./App.css";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import Recipe from "./components/Recipe/Recipe";
import {useEffect} from "react";
import {useSelector} from "react-redux";
function App() {

    const mode = useSelector(state => state.mode.mode)

    useEffect(() => {
        window.location.hash = "";
    }, []);


    let appStyles;

    if (mode === 'light') {
        appStyles = 'App'
    } else {
        appStyles = 'AppDark'

    }


    console.log(mode)
    return (<div className={
        `${appStyles}`
    }>
        <Header/>
        <Results/>
        <Recipe/>
    </div>);
}

export default App;
