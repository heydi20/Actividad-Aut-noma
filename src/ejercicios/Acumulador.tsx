import React, { useState } from 'react';

export const Acumulador: React.FC = () => {
    const [valor, setValor] = useState(0);

    const incrementar = () => {
        setValor(valor + 5);
    };

    const disminuir = () => {
        setValor(valor - 5);
    };

    return (
        <div>
            <h1>Acumulador</h1>
            <p> {valor}</p>
            <button className='btn btn-primary' onClick={incrementar}>+5</button>
            &nbsp;
            <button className='btn btn-primary' onClick={disminuir}>-5</button>
        </div>
    );
};      