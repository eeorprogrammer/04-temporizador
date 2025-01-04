import { useState, useEffect } from "react";
function Countdown() {
    //targetSeconds,elapsedSeconds
    let [targetSeconds, setTargetSeconds] = useState(null);
    let [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(function () {
        if (targetSeconds === null) return;
        //targetSeconds has value
        setElapsedSeconds(0);
        let interval = setInterval(function () {
            setElapsedSeconds((elapsedSeconds)=>elapsedSeconds + 1)
        }, 1000)
        return ()=>{
            clearInterval(interval);
        }
    }, [targetSeconds])

    function parseForm(ev) {
        ev.preventDefault();
        let seconds = ev.target.seconds.value;
        setTargetSeconds(parseInt(seconds));
    }
    if(elapsedSeconds>targetSeconds){
        return (
            <p>Termino el conteo!</p>
        );
    }
    if (targetSeconds !== null) {
        return (
            <p>soy un conteo hasta el {targetSeconds} y han transcurrido {elapsedSeconds} segundos</p>
        );
    }

    return (
        <div>
            <p>
                ¿Cuantos Segundos Quieres Contar ?
            </p>
            <form action="#" onSubmit={ev => parseForm(ev)}>
                <input type="number" name="seconds" />
                <button>Iniciar</button>
            </form>
        </div>

    )
}
export default Countdown;