import { Link } from "@reach/router";
import "./Nav.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Nav(){
    var [content, setContent] = useState([]);

    useEffect(
        function(){
            axios.get("http://localhost:1337/Categories") 
                .then(function(response){
                    setContent(response.data);
                    /* console.log(response.data); */
                })
        }, [setContent]); 

    return(
        <nav className="nav">
            <ul>
                {content.map(function(single){
                    return(
                        <li>
                            <Link className="category" to={"http://localhost:1337/Categories/" + single.id}>{single.kategorinavn}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}