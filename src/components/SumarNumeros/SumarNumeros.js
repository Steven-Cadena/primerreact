import paisaje from './../../assets/images/paisaje.jpg';

function SumarNumeros(props){
    var imgsize = {
        width: "150px", heigth:"150px"
    };
    const {Numero1,Numero2} = props; 
    //método
    const sumarNumero = (numero1, numero2) =>{
        var num1 = parseInt(props.Numero1);
        var num2 = parseInt(props.Numero2);
        var suma = num1 + num2;
        console.log(suma);
    }

    return(
        <div>
            <h1>Ejemplo sumar números básicos </h1>
            <img src={paisaje} className="App-logo" style={imgsize}/>
            <button onClick={ () => sumarNumero(7,7)}>
                Suma
            </button>
        </div>
    );
} 

export default SumarNumeros;