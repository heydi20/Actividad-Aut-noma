

export default function FuncionArreglo() {
    // Función para sumar elementos de un arreglo
    function sumarElementos(arreglo: number[]): number {
        return arreglo.reduce((acumulador, valor) => acumulador + valor, 0);
    }

    // Definir el arreglo de números
    const numeros = [1, 2, 3, 4, 5];

    return (
        <div>
            <h3>Función Arreglo</h3>
            <span>El arreglo es: {numeros.join(", ")}</span>
            <br/>
            <span>La suma de los elementos del arreglo es: {sumarElementos(numeros)}</span>
        </div>
    );
}
   
