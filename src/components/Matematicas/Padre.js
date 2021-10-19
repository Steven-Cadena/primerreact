import Matematicas from "./Matematicas";

function Padre(){

    const triple = (num)=> {
        var triple = num * 3;
        console.log("El triple es: " + triple)
    }

    return (
        <div>
            <Matematicas Numero="5" metodoTriple={triple}/>
            <Matematicas Numero="10" metodoTriple={triple}/>
            <Matematicas Numero="15" metodoTriple={triple}/>
        </div>
    );

}

export default Padre;