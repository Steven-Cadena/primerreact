function Matematicas(props){

    const {Numero, metodoTriple} = props;

    const doble = ()=>{
        var doble = Numero * 2;
        console.log("El doble es: " + doble);
    }
    return (
        <div>
            <h1>Soy el número {Numero} </h1>
            <button onClick={()=> doble()}>
                Doble
            </button>
            <br/> <br/> 
            <button onClick={()=> metodoTriple(Numero)}>
                Triple
            </button>
        </div>
    );
}

export default Matematicas;