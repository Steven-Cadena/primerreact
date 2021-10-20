import React, {useState} from 'react';


function MatematicasDibujo(props){

    const {Numero1, Numero2, multiplicar} = props;

    const [suma, setSuma] = useState(0);

    const sumar = ()=>{
        var total = parseInt(Numero1) + parseInt(Numero2);
        setSuma(total);
    };
    return(
        <div>
            <h1>Soy número {Numero1} y número {Numero2}</h1>
            <button onClick={()=> sumar()}>
                Sumar
            </button>
            <h2> Total de la suma es {suma}</h2>

            <button onClick={()=>multiplicar(Numero1,Numero2)}>
                Multiplicar
            </button>
        </div>
    );
};

export default MatematicasDibujo;