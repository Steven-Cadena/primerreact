import MatematicasDibujo from "./MatematicasDibujo";
import React, {useState} from 'react';

function PadreDibujo(){

    const [multiplicacion, setMultiplicacion] = useState(0);

    const multiplicar = (numero1,numero2)=>{
        var total = numero1 * numero2;
        setMultiplicacion(total);
        console.log(total);
    };

    return(
        <div>
            <MatematicasDibujo Numero1="10" Numero2="2" multiplicar={multiplicar}/>
            <MatematicasDibujo Numero1="5" Numero2="2" multiplicar={multiplicar}/>
            
        </div>
    )
};

export default PadreDibujo;