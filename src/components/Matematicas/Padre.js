import Matematicas from "./Matematicas";

function Padre(){
    //ESTE METODO DEBE SER LLAMADO DESDE LE HIJO
    const triple = (num)=> {
        var triple = num * 3;
        console.log("El triple es: " + triple);
    }

    return (
        <div>
            <Matematicas Numero="5" triple={triple}/>
            <Matematicas Numero="10" triple={triple}/>
            <Matematicas Numero="15" triple={triple}/>
            
        </div>
    );

}

export default Padre;