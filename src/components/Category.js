import "./Category.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "@reach/router";
import Menu from "./Menu";

export default function Category(props){
    var [content, setContent] = useState([]);

    useEffect(
        function(){
            if(props.id)
                axios.get("http://localhost:1337/Categories/" + props.id)
                    .then(function(response){
                        setContent(response.data);
                        /* console.log(response.data) */
                    })
        }, [props.id, setContent]);

    return(
        <main className="category">
            <Menu text={"Category: " + content.kategorinavn} />

            {content.articles?.map(function(cunt){
                return(
                    <article className="oneCategory">
                        <img src={"http://localhost:1337" + cunt.image?.url} alt={"image for category of the name " + cunt.heading} className="oneCategory__image oneArticle__image--one" />
                        <img src={"http://localhost:1337" + cunt.image?.url} alt={"image for category of the name " + cunt.heading} className="oneCategory__image oneArticle__image--two" />
                        <img src={"http://localhost:1337" + cunt.image?.url} alt={"image for category of the name " + cunt.heading} className="oneCategory__image oneArticle__image--three" />
                        <div className="oneCategory__text">
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