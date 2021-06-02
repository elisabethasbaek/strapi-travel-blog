import "./Articles.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "@reach/router";
import DownArrow from "./DownArrow";

export default function Articles(){
    var [content, setContent] = useState([]);

    useEffect(
        function(){
            axios.get("http://localhost:1337/Articels") /* yeah i know there is a spelling error, i cant change it in the backend for some reason */
                .then(function(response){
                    setContent(response.data);
                    console.log(response.data)
                })
            }, [setContent]);
            
    return(
        <main className="articles">
            <DownArrow />

            {content.map(function(cunt){
                return(
                    <article className="oneArticle">
                        <img src={"http://localhost:1337" + cunt.image?.url} alt={"image for article of the name " + cunt.heading} className="oneArticle__image oneArticle__image--one" />
                        <img src={"http://localhost:1337" + cunt.image?.url} alt={"image for article of the name " + cunt.heading} className="oneArticle__image oneArticle__image--two" />
                        <img src={"http://localhost:1337" + cunt.image?.url} alt={"image for article of the name " + cunt.heading} className="oneArticle__image oneArticle__image--three" />
                        <div className="oneArticle__text">
                            <p className="date">{cunt.date}</p>
                            <h1 className="heading">
                                <Link to={"/Articels/" + cunt.id} className="heading__link">{cunt.heading}</Link>
                            </h1>
                        </div>
                    </article>
                );
            })}
        </main>
    )
}