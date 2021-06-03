import "./SingleArticle.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import {Link} from "@reach/router";

export default function SingleArticle(props){
    var [content, setContent] = useState([]);

    useEffect(
        function(){
            if (props.id)
            axios.get("http://localhost:1337/Articels/" + props.id)
            .then(function(response){
                setContent(response.data);
               /* console.log(response.data); */
            })
        }, [props.id, setContent]
    );

    return(
        <article className="singleArticle">

            <section className="singleArticle__left">
                <img alt={content.heading} src={"http://localhost:1337" + content.image?.url} className="left__image" />
                <h1 className="left__heading">{content.heading}</h1>
            </section>

            <article className="singleArticle__right">
                <h2 className="right__subheading">{content.quote}</h2>
                <img alt={content.heading} src={"http://localhost:1337" + content.secondimage?.url} className="right__image" />
                <p className="right__text">{content.content}</p>
                <Link to="/" className="right__backLink">Back to frontpage</Link>
            </article>

            <Menu />
        </article>
    )
}