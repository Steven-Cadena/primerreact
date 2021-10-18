function Metodos(){
    var ejemplo = "Soy una variable de ejemplo.";
    //METODO NORMAL
    const mostrarMensaje = () => {
        console.log("Has pulsado un botón.");
        ejemplo = "He cambiado.";
        console.log(ejemplo);
    }
    //METODO CON PARAMETROS
    const dobleNumero = (numero) => {
        var doble = numero * 2;
        console.log(doble);
    }
    var estiloFeo = {
        color: "white", backgroundColor:"fuchsia"

    };
    return(
        <div>
            {/* con está forma podemos ejecutar el método nada más cargar la página */}
            {/* {mostrarMensaje()}  */}
            <h1 style={estiloFeo}> Ejemplo de métodos React.</h1>  
            <h2 style={{color:"red"}}> {ejemplo} </h2> 
            <button onClick={()=> mostrarMensaje()}>
                Pulsa para mensaje.
            </button>
            <br/>
            <button onClick={()=> dobleNumero(7)}>
                Número doble 
            </button>
        </div>
    );

}

export default Metodos;