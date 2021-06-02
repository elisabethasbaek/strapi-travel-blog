import anime from "animejs/lib/anime.es.js";
import "./Burger.scss";
import {useState, useEffect} from "react";

export default function Burger() {
    var [content, setContent] = useState(false);

    function change(){
        setContent(!content);

        if(content === false){
            anime({
                targets: ".burger__lineOne",
                easing: "linear",
                duration: 300,
                rotate: -45,
                translateX: -7.5,
                translateY: 7.5,
            })
    
            anime({
                targets: ".burger__lineTwo",
                easing: "linear",
                duration: 200,
                translateX: 15,
                opacity: 0,
            })
            
            anime({
                targets: ".burger__lineThree",
                easing: "linear",
                duration: 300,
                rotate: 45,
                translateX: -7.5,
                translateY: -7.5,
            })
        }

        if(content === true){
            anime({
                targets: ".burger__lineOne",
                easing: "linear",
                duration: 300,
                rotate: 0,
                translateY: 0,
                translateX: 0,
            })
    
            anime({
                targets: ".burger__lineTwo",
                easing: "linear",
                duration: 300,
                translateX: 0,
                opacity: 1,
            })
            
            anime({
                targets: ".burger__lineThree",
                easing: "linear",
                duration: 300,
                rotate: 0,
                translateY: 0,
                translateX: 0,
            })
        }
    }
        
    return (
        <section className="overBurger">
            <button className="burger" onClick={() => change()}>
                <div className="burger__lineOne"></div>
                <div className="burger__lineTwo"></div>
                <div className="burger__lineThree"></div>
            </button>
        </section>
    );
}