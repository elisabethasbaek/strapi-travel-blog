import "./Categories.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "@reach/router";
import Menu from "./Menu";

export default function Categories(){
    var [content, setContent] = useState([]);

    useEffect(
        function(){
            axios.get("http://localhost:1337/Categories")
            .then(function(response){
                setContent(response.data);
                /* console.log(response.data); */
            })
        }, [setContent]
    );

    return(
        <section className="categories">
            <Menu />

            {content.map(function(category){
                return(
                    <Link to={"/Categories/" + category.id} className="categories__container">
                        <img alt={category.kategorinavn} src={"http://localhost:1337" + category.image?.url} className="image"/>
                        <p className="category">{category.kategorinavn}</p>
                    </Link>
                )
            })}
            {content.map(function(category){
                return(
                    <Link to={"/Categories/" + category.id} className="categories__container">
                        <img alt={category.kategorinavn} src={"http://localhost:1337" + category.image?.url} className="image"/>
                        <p className="category">{category.kategorinavn}</p>
                    </Link>
                )
            })}
        </section>
    )
}