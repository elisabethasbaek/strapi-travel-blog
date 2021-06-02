import { Router } from "@reach/router";
import "./App.scss";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";

export default function App() {
    return (
        <div className="app">
            <Router>
                <Articles default />
                <SingleArticle path="/articels/:id" />
            </Router>
        </div>
    );
}
