import { Router } from "@reach/router";
import "./App.scss";
import Articles from "./components/Articles";
import Categories from "./components/Categories";
import Category from "./components/Category";
import SingleArticle from "./components/SingleArticle";

export default function App() {
    return (
        <div className="app">
            <Router>
                <Articles path="/Articles" default />
                <SingleArticle path="/Articels/:id" />
                <Categories path="/Categories" />
                <Category path="/Categories/:id" />
            </Router>
        </div>
    );
}
