import React, {useState} from 'react';


function MatematicasDibujo(props){

    const {Numero1, Numero2, multiplicar} = props;

    const [suma, setSuma] = useState(0);

    const sumar = (Numero1,Numero2)=>{
        var total = parseInt(Numero1) + parseInt(Numero2);
        setSuma(total);
    };
    return(
        <div>
            <h1>Soy número {Numero1} y número {Numero2}</h1>
            <button onClick={()=> sumar(Numero1,Numero2)}>
                Sumar
            </button>
            <h2> Total de la suma es {suma}</h2>

            <button onClick={()=>multiplicar(Numero1,Numero2)}>
                Multiplicar
            </button>
            <h2> Total de la multiplicación es {} </h2>
        </div>
    );
};

export default MatematicasDibujo;