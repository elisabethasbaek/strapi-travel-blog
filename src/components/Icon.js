import "./Icon.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "@reach/router";
//import anime from "animejs/lib/anime.es.js";

export default function Icon(){
    var [icon, setIcon] = useState([]);

    useEffect(
        function(){
            axios.get("http://localhost:1337/icon") 
                .then(function(response){
                    setIcon(response.data);
                    /* console.log(response.data) */
                })
        }, [setIcon]);    

    return(
        <Link to="/" className="icon">
            <img className="icon__icon" alt="Icon for the blog" src={"http://localhost:1337" + icon.icon?.url}/>
        </Link>
    )
}

//to do: disappear on scroll