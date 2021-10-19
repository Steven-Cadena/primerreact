function Saludo(props){
    var dato = "Y mañana será martes";
    //var nombre = props.nombre;
    //var edad = props.edad;

    //INVENTAMOS UN NOMBRE DE VARIABLE
    //QUE ES UN METODO PARA LLAMAR A ALGUNA 
    //ACCION QUE TENGAMOS EN EL PADRE
    //var metodo = props.metodoPadre;
    const {nombre, edad, metodoPadre} = props;
    return (
        <div className="App">
            <button onClick={()=>metodoPadre(nombre + " " + edad)}>
                Llamar al método Padre.
            </button>
            {/* <h1>Saludando a  {nombre} con edad {edad}. </h1>  */}
        </div>
    );
}

export default Saludo;